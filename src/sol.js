const { Keypair } = require("@solana/web3.js");

module.exports.genSol = (seed) => {
  const keyPair = Keypair.fromSeed(Buffer.from(seed, "utf8").slice(0, 32));
  return keyPair.publicKey.toString();
};
