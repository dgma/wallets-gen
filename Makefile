-include .env

.PHONY: all eth btc sol

all:; npm i

clear :; rm -rf .output.json

gen :; AMOUNT=$(amount) node src/

-include ${FCT_PLUGIN_PATH}/makefile-external
