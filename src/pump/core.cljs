(ns pump.core
  (:require [pump.template :refer [html]]
            [pump.utils :refer [wrap-functions]]))

(defn react
  [body]
  (.createClass js/React (clj->js (wrap-functions body))))

(def Output (react {:displayName "Output"
                    :render (fn [this state props]
                              (html [:div "123"
                                     [:p#pgh.cls (pr-str (:lines props))]
                                     [:ul (map #(identity [:li %])
                                               (:lines props))]]))}))

(def Root (react {:render (fn [this state props]
                            (html [:div "tralala: "
                                   [:a {:href "#"} "link"]
                                   [Output {:lines ["test" "test1"]}]]))}))

(defn ^:export main
  []
  (React/renderComponent (Root nil) (.-body js/document)))
