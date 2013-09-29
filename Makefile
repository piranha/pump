VERSION := $(shell awk '/defproject/ { gsub("\"", "", $$3); print $$3 }' project.clj)
JAR := target/pump-$(VERSION).jar

help:
	@echo "Available commands:"
	@echo "  pub - publish jar to clojars"
	@echo "  js  - run autobuild"

js:
	lein cljsbuild auto


pub: pom.xml $(JAR)
	scp $^ clojars@clojars.org:


pom.xml: project.clj
	lein pom

$(JAR): $(shell find src -name '*.clj')
	lein jar
