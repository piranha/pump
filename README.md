# Pump

Pump are ClojureScript bindings for [React][1].

## Usage

```clojure
(ns your.app
  (:require-macros [pump.macros :refer [defr]])
  (:require [pump]))

(defr Component
  :get-initial-state #(identity {:some-value ""})

  [component props state]

  [:div {:class-name "test"} (:some-value @component)])
```

See `defr` [documentation][2] and [an example][3] of usage.

[1]: http://facebook.github.io/react/
[2]: https://github.com/piranha/pump/blob/master/src/pump/macros.clj#L25
[3]: https://github.com/piranha/pump/blob/master/src/pump/example.cljs
