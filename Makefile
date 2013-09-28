VERSION := $(shell awk '/defproject/ { gsub("\"", "", $$3); print $$3 }' project.clj)
JAR := target/pump-$(VERSION).jar

help:
	@echo "pub - publish jar to clojars"


pub: pom.xml $(JAR)
	scp $^ clojars@clojars.org:


pom.xml: project.clj
	lein pom

$(JAR): $(shell find src -name '*.clj')
	lein jar
