(defproject pump "0.4.0"
  :clojurescript? true
  :description "CLJS bindings for React"
  :url "http://github.com/piranha/pump"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-html.v10"}
  :plugins [[lein-cljsbuild "0.3.3" :hooks false]]
  :dependencies [[org.clojure/clojurescript "0.0-1913"]]
  :cljsbuild {:builds [{:id "main"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/target/pump.js"
;                                   :libs ["resources/static/react.min.js"]
                                   :externs ["resources/externs/react.js"]
                                   :optimizations :whitespace}
                        :jar true}]})
