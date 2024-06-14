const bitcoin = require("bitcoinjs-lib");
const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");

const bip32 = BIP32Factory(ecc);

module.exports.genBtc = (seed) => {
  const root = bip32.fromSeed(
    Buffer.from(seed, "utf8"),
    bitcoin.networks.bitcoin
  );
  return bitcoin.payments.p2wpkh({
    pubkey: root.derivePath("m/84'/0'/0'/0/0").publicKey,
    network: bitcoin.networks.bitcoin,
  }).address;
};
