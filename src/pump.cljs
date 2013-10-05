(ns pump
  [:require [pump.core :refer [wrap-functions add-atom-mixin]]])

(defn prevent [e]
  (.preventDefault e)
  e)

(defn e-value
  [e]
  (.. e -target -value))

(defn react
  [body]
  (.createClass js/React (-> body
                             wrap-functions
                             add-atom-mixin
                             clj->js)))
