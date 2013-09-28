(ns pump.def-macros
  (:require [clojure.string :as string]))

(defn dash-to-camel-name
  [name]
  (let [words (string/split name #"-")
        camels (map string/capitalize (rest words))
        complete (apply str (first words) camels)]
    complete))

(defn dash-to-camel-keys
  [hashmap]
  (into {} (for [[k v] hashmap]
             [(keyword (dash-to-camel-name (name k))) v])))

(defmacro defr
  [name body]
  (let [cameled# (dash-to-camel-keys body)
        body# (assoc cameled# :displayName name)]
    `(def ~name (pump.core/react ~body#))))
