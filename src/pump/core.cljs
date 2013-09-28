(ns pump.core
  (:require [pump.template :refer [html]]
            [pump.utils :refer [wrap-functions]]))

(defn react
  [body]
  (.createClass js/React (clj->js (wrap-functions body))))

(defn prevent [e]
  (.preventDefault e)
  e)

(defn update-state [this keys f & args]
  (let [keys (if-not (vector? keys) [keys] keys)]
    (.setState this
               (apply update-in (.-state this) keys f args))))

(defn assoc-state [this keys value]
  (let [keys (if-not (vector? keys) [keys] keys)]
    (.setState this
               (assoc-in (.-state this) keys value))))

(def Input (react {:getInitialState #(identity {:value ""})
                   :render (fn [this
                                {:keys [on-submit]}
                                {:keys [value]}]
                             [:form {:onSubmit #(do (.log js/console "LALALA")
                                                    (.preventDefault %)
                                                    (on-submit value)
                                                    (assoc-state this :value ""))}
                              [:input {:onChange #(do (.log js/console "TRALALA")
                                                      (assoc-state this
                                                                   :value (.. % -target -value)))
                                       :value value}]
                              [:input {:type "submit" :value "Send"}]])}))

(def Output (react {:displayName "Output"
                    :render (fn [this {:keys [lines]} state]
                              [:div
                               [:ul (map #(identity [:li %]) lines)]])}))

(def Root (react {:getInitialState #(identity {:lines ["test"]})
                  :render (fn [this props state]
                            [:div
                             [Output state]
                             [Input {:on-submit #(update-state this :lines conj %)}]])}))

(defn ^:export main
  []
  (let [root (React/renderComponent (Root nil) (.-body js/document))]
    (.log js/console root)))
