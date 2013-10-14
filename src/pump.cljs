(ns pump
  (:require [module$React :as React]
            [pump.core :refer [wrap-functions add-atom-mixin]]))

(defn prevent [e]
  (.preventDefault e)
  e)

(defn e-value
  [e]
  (.. e -target -value))

(defn react
  [body]
  (React/createClass (-> body
                         wrap-functions
                         add-atom-mixin
                         clj->js)))
