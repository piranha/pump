(ns pump.core
  (:require [pump.template :refer [html]]
            [pump.utils :refer [wrap-functions]]))

(defn react
  [body]
  (.createClass js/React (clj->js (wrap-functions body))))

(defn ^:export main
  []
  (let [Output (react {:displayName "Output"
                       :render (fn [this state props]
                                 (html [:div "123"
                                        [:p#pgh.cls (:lines props)]
                                        [:ul (map #(identity [:li %])
                                                  (:lines props))]]))})
        Root (react {:render (fn [this state props]
                               (html [:div "tralala: "
                                      [:a {:href "#"} "link"]
                                      [Output {:lines ["test" "test1"]}]]))})]
    (React/renderComponent (Root nil) (.-body js/document))))
