# Wallet generator

Simple js script for btc, eth and solana wallets generation.
Created wallets saved in .json files.

## Requirements

- Node.js >= v18.x
- Bash-like environment

## Installation

```sh
make
```

## Usage

Generate particular wallets

```sh
make <script> amount=<amount> output=<output-file>
```

script - wallet type to generate (btc, eth, sol);
amount - wallets amount, optional;
output-file - output file name, optional;

Generate all wallets

```sh
make gen amount=<amount> output=<output-file> networks=<networks>
```

networks - coma separated list of networks, for instance btc,sol. Optional.
