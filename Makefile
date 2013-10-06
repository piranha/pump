VERSION := $(shell awk '/defproject/ { gsub("\"", "", $$3); print $$3 }' project.clj)
JAR := target/pump-$(VERSION).jar

help:
	@echo "Available commands:"
	@echo "  pub - publish jar to clojars"
	@echo "  js  - run autobuild for example app"
	@echo "  min - compile minified version of example app"

js:
	lein cljsbuild auto main

min:
	lein clsjbuild once min

pub: pom.xml $(JAR)
	scp $^ clojars@clojars.org:

jar: pom.xml $(JAR)

pom.xml: project.clj
	lein pom

$(JAR): $(shell find src -name '*.clj')
	lein jar
