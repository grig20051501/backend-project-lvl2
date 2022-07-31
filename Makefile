lint:
	sudo npx eslint .
install: 
	npm ci
publish:
	npm publish --dry-run
	npm link
