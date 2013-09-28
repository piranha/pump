(ns pump.core
  (:use-macros [pump.def-macros :only [defr]])
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
    (.setState this (js-obj "state"
                            (apply update-in (.. this -state -state) keys f args)))))

(defn assoc-state [this keys value]
  (let [keys (if-not (vector? keys) [keys] keys)]
    (.setState this (js-obj "state"
                            (assoc-in (.. this -state -state) keys value)))))

(defn e-value
  [e]
  (.. e -target -value))

(defr Input
  {:get-initial-state #(identity {:value ""})
   :render (fn [this
                {:keys [on-submit]}
                {:keys [value]}]
             [:form {:on-submit #(do (.preventDefault %)
                                     (on-submit value)
                                     (assoc-state this :value ""))}
              [:input {:on-change #(do (assoc-state this
                                                    :value (e-value %)))
                       :type "text"
                       :value value}]
              [:input {:type "submit" :value "Send"}]])})

(defr Output
  {:render (fn [this {:keys [lines]} state]
             [:div
              [:ul (map #(identity [:li %]) lines)]])})

(defr Root
  {:get-initial-state #(identity {:lines ["test"]})
   :render (fn [this props state]
             [:div
              [Output state]
              [Input {:on-submit #(update-state this :lines conj %)}]])})

(defn ^:export main
  []
  (let [root (React/renderComponent (Root nil) (.-body js/document))]
    (.log js/console root)))
