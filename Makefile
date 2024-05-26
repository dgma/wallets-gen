-include .env

.PHONY: all eth btc sol

all: npm i

clear :; rm -rf .btc.result.json && rm -rf .eth.result.json && rm -rf .sol.result.json && rm -rf .all.result.json

# Run deploy task based on hardhat.config
eth :; AMOUNT=$(amount) OUTPUT=$(output) node src/eth.js

btc :; AMOUNT=$(amount) OUTPUT=$(output) node src/btc.js

sol :; AMOUNT=$(amount) OUTPUT=$(output) node src/sol.js

gen :; AMOUNT=$(amount) OUTPUT=$(output) NETWORKS=$(networks) node src/

-include ${FCT_PLUGIN_PATH}/makefile-external
