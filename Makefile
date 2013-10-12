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
	dgraph ~/dev/web/react/build/modules/React.js | \
		jq '.[] | .id' | \
		xargs closure-compiler \
			--compilation_level WHITESPACE_ONLY \
			--formatting PRETTY_PRINT \
			--common_js_entry_module React \
			--common_js_module_path_prefix ~/dev/web/react/build/modules/ \
			--process_common_js_modules \
			--module auto \
			--module_output_path_prefix resources/react/
#	@echo 'goog.provide("React");' > resources/react/React.js
#	@echo 'goog.require("module$React");' >> resources/react/React.js
#	@echo 'var React = module$React;' >> resources/react/React.js


adv-react:
	cd resources/static && closure-compiler \
		--compilation_level ADVANCED_OPTIMIZATIONS \
		--externs ../externs/react.js \
		--js_output_file react.adv-min.js \
		--create_source_map %outname%.map \
		--source_map_format=V3 \
		../react/*.js

	echo '//@ sourceMappingURL=react.adv-min.js.map' >> resources/static/react.adv-min.js

adv-dumb:
	closure-compiler \
		--compilation_level ADVANCED_OPTIMIZATIONS \
		--js_output_file resources/static/dumb.adv.js \
		resources/react/*.js resources/static/dumbchat.js
