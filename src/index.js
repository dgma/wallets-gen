const { genBtc } = require("./btc");
const { genEth } = require("./eth");
const { genSol } = require("./sol");
const { save } = require("./save");

const networks = process.env.NETWORKS || "btc,eth,sol";

console.log("generate for", networks);

const parsedNetworks = networks.split(",").filter((i) => i);

const networksMap = {
  btc: genBtc,
  eth: genEth,
  sol: genSol,
};

const genAll = () =>
  parsedNetworks.reduce((acc, ntw) => {
    acc[ntw] = networksMap[ntw]();
    return acc;
  }, {});

save("all", genAll());
