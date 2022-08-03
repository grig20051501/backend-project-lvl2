lint:
	npx eslint .
install: 
	npm ci
publish:
	npm publish --dry-run
	npm link
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
