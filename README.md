# Pump

Pump are ClojureScript bindings for [React][1].

## Usage

```clojure
(ns your.app
  (:require-macros [pump.def-macros :refer [defr]])
  (:require [pump.core]))

(defr Component
  :get-initial-state #(identity {:some-value ""})

  [component props state]

  [:div {:class-name "test"} "hello"])
```

See `defr` [documentation][2].

[1]: http://facebook.github.io/react/
[2]: https://github.com/piranha/pump/blob/master/src/pump/def_macros.clj#L25
