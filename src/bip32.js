const ecc = require("tiny-secp256k1");
const { BIP32Factory } = require("bip32");

module.exports.bip32secp256k1 = BIP32Factory(ecc);