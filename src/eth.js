const ethers = require("ethers");

const defaultPath = "m/44'/60'/0'/0/0";

module.exports.genEth = (seed) => {
  const hd = ethers.HDNodeWallet.fromSeed(
    `0x${Buffer.from(seed).toString("hex")}`
  ).derivePath(defaultPath);
  return {
    address: hd.address,
    pk: hd.privateKey,
  };
};
