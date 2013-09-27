(ns pump.utils
  (:require [pump.template :refer [html]]))

(defn add-this-as-first-argument
  [f]
  (if (fn? f)
    (fn [& args] (this-as c (apply f c args)))
    f))

(defn wrap-functions
  [{:keys [render] :as props-map}]
  (let [render-proxy #(this-as this
                        (let [res (render this (.-state this) (.-props this))]
                          (if (vector? res)
                            (html res)
                            res)))
        props-proxy (for [[name f] (dissoc props-map :render)]
                      [name (add-this-as-first-argument f)])
        props (into {:render render-proxy} props-proxy)]
    props))

