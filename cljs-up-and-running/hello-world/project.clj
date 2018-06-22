(defproject hello-world "0.1.0-SNAPSHOT"
  :description "Template for future clojurescript projects"
  :url "none"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1450"]]
  :plugins [[lein-cljsbuild "0.2.7"]]
  :source-paths ["src/clj"]
  :cljsbuild {:builds [{
                        :source-path "src/cljs"
                        :compiler {
                                   :output-to "resources/public/hello.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}]})
