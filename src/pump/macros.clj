(ns pump.macros
  (:require [clojure.string :as string]))

(defn dash-to-camel-name
  [k]
  (let [words (string/split (name k) #"-")
        camels (map string/capitalize (rest words))
        complete (apply str (first words) camels)]
    (keyword complete)))

(defn dash-to-camel-keys
  [hashmap]
  (into {} (for [[k v] hashmap]
             [(dash-to-camel-name k) v])))

(defn body-map
  [forms]
  (if (map? (first forms))
    (first forms)
    (let [[fn-pairs render-form] (split-with #(not (vector? %)) forms)
          body-map (apply hash-map fn-pairs)]
      (assoc body-map :render
             (apply list 'fn (first render-form) (rest render-form))))))

(defmacro defr
  "Macro for defining React components

   In most basic forms takes a map of function names to functions, converts them
   from dashed-version to camelCasedVersion, adds displayName and passes to
   pump.core/react.

   Can also accept more advanced form:

     (defr Component
       [C P S]
       (some-fn P)
       [:div.class (:text P)])

   This example only shows how render function is defined. If you need to define
   more (some life cycle functions, for example), define them before defining
   render arguments:

     (defr Component
       :component-will-mount #(.log js/console \"component on duty\")
       [C P S]
       [:div.class (:text P)])
"
  [name & forms]
  (let [body# (body-map forms)
        cameled# (dash-to-camel-keys body#)
        body# (assoc cameled# :displayName (str name))]
    `(def ~name (pump/react ~body#))))
