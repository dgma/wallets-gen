const { getAddress } = require("micro-sol-signer");
const slip10 = require("micro-key-producer/slip10.js");

module.exports.genSol = (seed) => {
  const hdPath = `m/44'/501'/0'/0'`;
  const keyPair = slip10.HDKey.fromMasterSeed(seed.toString("hex")).derive(
    hdPath
  );

  return {
    address: getAddress(keyPair.privateKey),
    pk: Buffer.from(keyPair.privateKey).toString("hex"),
  };
};
