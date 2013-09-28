(ns pump.utils
  (:require [pump.template :refer [html]]))

(defn add-this-as-first-argument
  [f]
  (if (fn? f)
    (fn [& args] (this-as c (apply f c (.-props c) (.. c -state -state) args)))
    f))

(def special-wrappers
  {:render (fn [this render]
             (let [res (render this (.-props this) (.. this -state -state))]
                (if (vector? res)
                  (html res)
                  res)))
   :getInitialState (fn [this get-initial-state]
                      (let [state (js/Object.)]
                         (aset state "state" (get-initial-state this))
                         state))})

(defn wrap-functions
  [{:keys [render] :as props-map}]
  (into {:getInitialState #(js/Object.)}
        (for [[k fn] props-map
              :let [special (special-wrappers k)]]
          [k (if (nil? special)
               (add-this-as-first-argument fn)
               #(this-as this (special this fn)))])))
