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
                                   :libs ["resources/react/"]
                                   :optimizations :whitespace}
                        :jar true}
                       {:id "min"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/target/pump.min.js"
;;                                   :externs ["resources/externs/react.js"]
                                   :libs ["resources/react/"]
                                   :optimizations :advanced}}
                       {:id "map"
                        :source-paths ["src"]
                        ;; map brings full paths so it's necessary to build it in place
                        ;; plus it requires to be served from http://, not from file://
                        :compiler {:output-to "pump.min.js"
                                   :source-map "pump.min.js.map"
;;                                   :externs ["resources/externs/react.js"]
                                   :libs ["resources/react/"]
                                   :optimizations :advanced}}]})
