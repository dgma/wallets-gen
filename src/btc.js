const bitcoin = require("bitcoinjs-lib");
const { bip32secp256k1 } = require("./bip32");

module.exports.genBtc = (seed) => {
  const rootKey = bip32secp256k1
    .fromSeed(seed, bitcoin.networks.bitcoin)
    .derivePath("m/84'/0'/0'/0/0");
  return {
    address: bitcoin.payments.p2wpkh({
      pubkey: rootKey.publicKey,
      network: bitcoin.networks.bitcoin,
    }).address,
    pkᵻ: rootKey.toWIF(),
  };
};
