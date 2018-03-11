
build: node_modules
	node metalsmith/index.js
	mv README/index.html README.md
	rmdir README

node_modules: package.json
	npm install

.PHONY: build
