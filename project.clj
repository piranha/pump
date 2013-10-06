(defproject pump "0.4.3"
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
                                   :foreign-libs [{:file "resources/static/react.js"
                                                   :provides ["React"]}]
                                   :optimizations :whitespace}
                        :jar true}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/target/pump.min.js"
                                   ;; with externs everything is a bit less hard to understand
                                   :externs ["resources/externs/react.js"]
                                   :foreign-libs [{:file "resources/static/react.js"
                                                   :provides ["React"]}]
                                   :optimizations :advanced}}]})
