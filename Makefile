VERSION := $(shell awk '/defproject/ { gsub("\"", "", $$3); print $$3 }' project.clj)
JAR := target/pump-$(VERSION).jar

.PHONY: gcc-react.js

help:
	@echo "Available commands:"
	@echo "  pub - publish jar to clojars"
	@echo "  js  - run autobuild for example app"
	@echo "  min - compile minified version of example app"

js:
	lein cljsbuild auto main

min:
	lein cljsbuild once min

pub: pom.xml $(JAR)
	scp $^ clojars@clojars.org:

jar: pom.xml $(JAR)

pom.xml: project.clj
	lein pom

$(JAR): $(shell find src -name '*.clj')
	lein jar


# npm install dgraph
# brew install jq
gcc-react:
	dgraph ~/dev/web/react/build/modules/React.js | jq '.[] | .id' | xargs closure-compiler --common_js_entry_module React --common_js_module_path_prefix ~/dev/web/react/build/modules/ --process_common_js_modules --compilation_level WHITESPACE_ONLY --formatting PRETTY_PRINT > resources/static/gcc-react.js
	echo 'var React = module$React;' >> resources/static/gcc-react.js
