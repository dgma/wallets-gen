# Wallet generator

Generates wallets for different blockchain networks. The result is stored in two files:

1. .wallets.json

   ```ts
   type Wallet = Array<{
     mnemonicᵻ: string;
     [network: string]: {
       address: string;
       pkᵻ: string;
     };
   }>;
   ```

2. .wallets.pub.json

   ```ts
   type Wallet = Array<{
     [network: string]: string;
   }>;
   ```

## Supported networks and path

- btc, m/84'/0'/0'/0/0
- eth, m/44'/60'/0'/0
- atom, m/44'/118'/0'/0/0
- tia, m/44'/118'/0'/0/0
- sol, m/44'/501'/0'/0'

## Requirements

- Node.js >= v18.x
- Bash-like environment

## Installation

```sh
make
```

## Usage

Generate wallets

```sh
make gen amount=<amount>
```
