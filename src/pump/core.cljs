(ns pump.core
  (:require [pump.template :refer [html]]))

(defn react
  [body]
  (.createClass js/React (clj->js body)))

(defn ^:export main
  []
  (let [Root (react {:render (fn [] (html [:div "tralala: "
                                           [:a {:href "#"} "link"]]))})]
    (React/renderComponent (Root nil) (.-body js/document))))
