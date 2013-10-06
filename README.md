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

## Setting up a project

You will certainly need a `react.js` file by itself, for example download it
[from CDNjs][4], put somewhere locally (i.e. in ``resources/vendor``), and then
refer in your `:cljsbuild` configuration like that:

```clojure
:cljsbuild
{:builds [{:id "main"
           :source-paths ["cljs"]
           :compiler {:output-to "resources/target/main.js"
                      :foreign-libs [{:file "resources/vendor/react.min.js"
                                      :provides ["React"]}]
                      :optimizations :whitespace}}]}
```

If you look into cljsbuild [internals][5], you will see that you should be able
to use a link instead of downloading file locally. But that didn't work for me.

[1]: http://facebook.github.io/react/
[2]: https://github.com/piranha/pump/blob/master/src/pump/macros.clj#L25
[3]: https://github.com/piranha/pump/blob/master/src/pump/example.cljs
[4]: http://cdnjs.cloudflare.com/ajax/libs/react/0.4.1/react.min.js
[5]: https://github.com/clojure/clojurescript/commit/96b38e2c951ef07b397e9d#diff-480d4dd0322c0b2d58ad0ad002f6d4cdR426
