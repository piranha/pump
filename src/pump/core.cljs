(ns pump.core
  (:require-macros [pump.macros :refer [defr]])
  (:require [pump.template :refer [html]]))


;;; Atom protocol as mixin

(def ReactCljMixin (js-obj))
(def -ToExtend (js-obj "prototype" ReactCljMixin))
(extend-type -ToExtend
  IEquiv
  (-equiv [C other] (identical? C other))

  IDeref
  (-deref [C] (.-state C))

  IMeta
  (-meta [C] nil)

  IPrintWithWriter
  (-pr-writer [C writer opts]
    (-write writer (str "#<" (.-displayName C) ": "))
    (pr-writer (.-state C) writer opts)
    (-write writer ">"))

  IWatchable
  (-notify-watches [C old new]
    (if (not= old new)
      (.forceUpdate C)))
  (-add-watch [C key f] nil)
  (-remove-watch [C key] nil)

  IHash
  (-hash [C] (goog/getUid C)))

;;; Function wrapping

(defn add-first-arguments
  [f]
  (fn [& args] (this-as this (apply f this (.-props this) @this args))))

(defn render-wrapper [render]
  (fn [this props state]
    (let [res (render this props state)]
      (if (vector? res)
        (html res)
        res))))

(defn wrap-functions
  [props-map]
  (into {} (for [[k val] props-map]
             [k (if-not (fn? val)
                  val
                  (add-first-arguments (if (= k :render)
                                         (render-wrapper val)
                                         val)))])))

(defn add-atom-mixin
  [props-map]
  (merge-with concat props-map {:mixins [ReactCljMixin]}))
