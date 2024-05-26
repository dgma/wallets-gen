const { create } = require("web3-eth-accounts");
const { save } = require("./save");

const amount = process.env.AMOUNT || 1;

const genEth = () =>
  Array.from({ length: amount }).reduce((acc, _, i) => {
    const keyPair = create();
    acc.push({
      addr: keyPair.address,
      pk: keyPair.privateKey,
    });
    return acc;
  }, []);

module.exports = {
  genEth,
};

if (require.main === module) {
  save("eth", genEth());
}
