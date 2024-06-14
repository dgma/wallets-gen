const { ripemd160, sha256 } = require("@cosmjs/crypto");
const { toBech32 } = require("@cosmjs/encoding");
const { chains } = require("./chains");
const { HDKey } = require("@scure/bip32");

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
  const root = HDKey.fromMasterSeed(seed).derive(hdPath);
  return toBech32(
    chain.addressPrefix,
    rawSecp256k1PubkeyToRawAddress(root.publicKey)
  );
};

module.exports.genAtom = gen(chains.cosmos);
module.exports.genTia = gen(chains.celestia);
