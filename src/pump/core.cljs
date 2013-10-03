(ns pump.core
  (:require-macros [pump.def-macros :refer [defr]])
  (:require [pump.template :refer [html]]
            [pump.utils :refer [wrap-functions]]))

(defn component [state-ref render-fn & {:keys [did-mount will-unmount]}]
  (let [inner-mount (fn []
                   (add-watch state-ref :react
                              (fn [_ _ old new]
                                (when (not= old new)
                                  (this-as this (.forceUpdate this)))
                                (if did-mount
                                  (did-mount)))))
        inner-unmount (fn []
                        (remove-watch state-ref :react)
                        (if will-unmount
                          (will-unmount)))
        comp (React/createClass
              (js-obj "render" (fn []
                                 (this-as this
                                   (render-fn this (.-props this))))
                      "componentDidMount" inner-mount
                      "componentWillUnount" inner-unmount))]))

(defn react
  [body]
  (.createClass js/React (clj->js (wrap-functions body))))

(defn prevent [e]
  (.preventDefault e)
  e)

(defn- component-state [C]
  (.. C -state -state))

(defn update-in-state [C keys f & args]
  (let [keys (if-not (vector? keys) [keys] keys)]
    (.setState C (js-obj "state"
                         (apply update-in (component-state C) keys f args)))))

(defn assoc-in-state [C keys value]
  (let [keys (if-not (vector? keys) [keys] keys)]
    (.setState C (js-obj "state"
                         (assoc-in (component-state C) keys value)))))

(defn assoc-state [C data]
  (.setState C (js-obj "state"
                       (merge (component-state C) data))))

(defn e-value
  [e]
  (.. e -target -value))

(defr Input
  :get-initial-state (fn [] {:value ""})
  [this {:keys [on-submit]} {:keys [value]}]

  [:form {:on-submit #(do (.preventDefault %)
                          (on-submit value)
                          (assoc-in-state this :value ""))}
   [:input {:on-change #(assoc-in-state this :value (e-value %))
            :type "text"
            :value value}]
   [:input {:type "submit" :value "Send"}]])

(defr Output
  [this {:keys [lines]} state]

  [:div
   [:ul (map #(identity [:li %]) lines)]])

(defr Root
  :get-initial-state #(identity {:lines ["test"]})
  [this props state]

  [:div
   [Output state]
   [Input {:on-submit #(update-in-state this :lines conj %)}]])

(defn ^:export main
  []
  (let [root (React/renderComponent (Root nil) (.-body js/document))]
    (.log js/console root)))
