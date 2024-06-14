const ethers = require("ethers");

module.exports.genEth = (seed) => {
  const hd = ethers.HDNodeWallet.fromSeed(Buffer.from(seed, "utf8"));
  return hd.address;
};
