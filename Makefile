.PHONY: all test clean
export MAKE_PATH ?= $(shell pwd)
export SELF ?= $(MAKE)

clean:
	rm -rf dist/

npm/rollup:
	npm run rollup

npm/publish:
	npm publish


## Run jest tests
npm/test:
	npm run test

## Delete jest snaps
delete_snaps:
	./scripts/delete_snaps.sh

publish: clean npm/rollup npm/publish

## Show available commands
help:
	@printf "Available targets:\n\n"
	@$(SELF) -s help/generate | grep -E "\w($(HELP_FILTER))"
	@printf "\n"

help/generate:
	@awk '/^[a-zA-Z\_0-9%:\\\/-]+:/ { \
		helpMessage = match(lastLine, /^## (.*)/); \
		if (helpMessage) { \
			helpCommand = $$1; \
			helpMessage = substr(lastLine, RSTART + 3, RLENGTH); \
			gsub("\\\\", "", helpCommand); \
			gsub(":+$$", "", helpCommand); \
			printf "  \x1b[32;01m%-35s\x1b[0m %s\n", helpCommand, helpMessage; \
		} \
	} \
	{ lastLine = $$0 }' $(MAKE_FILES) | sort -u
	@printf "\n\n"
