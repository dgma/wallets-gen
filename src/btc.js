const bitcoin = require("bitcoinjs-lib");
const { ECPairFactory } = require("ecpair");
const ecc = require("tiny-secp256k1");
const { save } = require("./save");

const amount = process.env.AMOUNT || 1;
const ECPair = ECPairFactory(ecc);

const genBtc = () =>
  Array.from({ length: amount }).reduce((acc, _, i) => {
    const keyPair = ECPair.makeRandom();
    acc.push({
      addr: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey }).address,
      pub: keyPair.publicKey.toString("hex"),
      pk: keyPair.toWIF(),
    });
    return acc;
  }, []);

module.exports = {
  genBtc,
};

if (require.main === module) {
  save("btc", genBtc());
}
