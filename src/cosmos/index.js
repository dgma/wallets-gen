const { ripemd160, sha256 } = require("@cosmjs/crypto");
const { toBech32 } = require("@cosmjs/encoding");
const { chains } = require("./chains");
const { bip32secp256k1 } = require("../bip32");

function rawSecp256k1PubkeyToRawAddress(pubkeyData) {
  if (pubkeyData.length !== 33) {
    throw new Error(
      `Invalid Secp256k1 pubkey length (compressed): ${pubkeyData.length}`
    );
  }
  return ripemd160(sha256(pubkeyData));
}

const gen = (chain) => (seed) => {
  const hdPath = `m/44'/${chain.bip44.coinType}'/0'/0/0`;
  const keyPair = bip32secp256k1.fromSeed(seed).derivePath(hdPath);
  return {
    address: toBech32(
      chain.addressPrefix,
      rawSecp256k1PubkeyToRawAddress(keyPair.publicKey)
    ),
    pk: Buffer.from(keyPair.privateKey).toString("hex"),
  };
};

module.exports.genAtom = gen(chains.cosmos);
module.exports.genTia = gen(chains.celestia);
