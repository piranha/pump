(ns pump.template
  (:require  [clojure.string :as string]))

(declare elem-factory)

(defn as-content
  [content]
  (for [c content]
    (cond (nil? c) nil
          (map? c) (throw "Maps cannot be used as content")
          (string? c) c
          (vector? c) (elem-factory c)
          (seq? c) (as-content c)
          :else (str c))))

;; From Weavejester's Hiccup: https://github.com/weavejester/hiccup/blob/master/src/hiccup/compiler.clj#L32
(def ^{:doc "Regular expression that parses a CSS-style id and class from a tag name."
       :private true}
  re-tag #"([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?")

(defn parse-tag
  [tag]
  (if (fn? tag)
    [:custom tag nil nil]
    (let [[tag id class] (next (re-matches re-tag (name tag)))]
      [:vanilla (aget (.-DOM js/React) tag) id class])))

(def attr-mapping
  {:class :className})

(defn normalize-attributes
  [attrs]
  (into {} (map
            (fn [[k v]] [(attr-mapping k k) v])
            attrs)))

(defn exclude-empty
  [attrs]
  (into {} (filter (fn [[k v]] v) attrs)))

(defn normalize-element
  "Ensure an element vector is of the form [tag-name attrs content]."
  [[tag & content]]
  (when (not (or (keyword? tag) (symbol? tag) (string? tag) (fn? tag)))
    (throw (str tag " is not a valid element name.")))
  (let [[tag-type tag id class] (parse-tag tag)
        tag-attrs      {:id (or id nil)
                        :className (if class (string/replace class #"\." " "))}
        map-attrs      (first content)]
    (if (map? map-attrs)
      [tag-type tag (merge tag-attrs (normalize-attributes map-attrs)) (next content)]
      [tag-type tag tag-attrs content])))

(defn elem-factory
  [elem-def]
  (let [[tag-type tag-fn attrs content] (normalize-element elem-def)
        attrs (exclude-empty attrs)
        attrs (if (= tag-type :vanilla) (clj->js attrs) attrs)]
    (if (nil? tag-fn)
      (throw (str "Element definition '" (pr-str elem-def) "' could not be parsed")))
    (tag-fn attrs (clj->js (as-content content)))))

(defn html [& tags]
  (let [res (map elem-factory tags)]
    (if (second res)
      res
      (first res))))
