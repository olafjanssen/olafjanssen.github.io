
build: node_modules
	node metalsmith/index.js

node_modules: package.json
	npm install

.PHONY: build
