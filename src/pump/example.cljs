(ns pump.example
  (:require-macros [pump.macros :refer [defr]])
  (:require [pump :refer [prevent e-value]]))

(defr Input
  [C {:keys [on-submit]} {:keys [value]}]
  [:form {:on-submit #(do (prevent %)
                          (on-submit value)
                          (swap! C assoc :value ""))}
   [:input {:on-change #(swap! C assoc :value (e-value %))
            :type "text"
            :value value}]
   [:input {:type "submit" :value "send"}]])

(defr Output
  [C {:keys [lines]} S]
  [:div
   [:ul (for [x lines]
          [:li x])]])

(defr Root
  :get-initial-state #(identity {:lines ["one line" "second line"]})
  [C P S]
  [:div
   [Output S]
   [Input {:on-submit #(swap! C update-in [:lines] conj %)}]])

(defn ^:export main
  []
  (let [root (React/renderComponent (Root) (.-body js/document))]
    (.log js/console root)))
