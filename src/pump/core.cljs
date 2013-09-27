(ns pump.core
  (:require [pump.template :refer [html]]))

(defn react
  [body]
  (.createClass js/React (clj->js body)))

(defn ^:export main
  []
  (let [Root (react {:render (fn [] (html [:div "tralala: "
                                           [:a {:href "#"} "link"]
                                           [:ul
                                            (map (fn [x] [:li x])
                                                 ["test" "passed"])]]))})]
    (React/renderComponent (Root nil) (.-body js/document))))
