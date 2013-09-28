(ns pump.def-macros)

(defmacro defr
  [name body]
  `(def ~name (pump.core/react (assoc ~body :displayName name))))
