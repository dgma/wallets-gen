const fs = require("fs");
const { genBtc } = require("./btc");
const { genEth } = require("./eth");
const { genSol } = require("./sol");
const { genTia, genAtom } = require("./cosmos");
const bip39 = require("bip39");

const amount = process.env.AMOUNT || 1;
const networks = process.env.NETWORKS || "btc,evm,sol,tia,atom";

console.log("generate for", networks);

const parsedNetworks = networks.split(",").filter((i) => i);

const networksMap = {
  btc: genBtc,
  evm: genEth,
  sol: genSol,
  tia: genTia,
  atom: genAtom,
};

const generate = () =>
  Array.from({ length: amount }).reduce((acc) => {
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    acc.push({
      mnemonicᵻ: mnemonic,
      ...genAll(seed),
    });
    return acc;
  }, []);

const genAll = (seed) =>
  parsedNetworks.reduce((acc, ntw) => {
    acc[ntw] = networksMap[ntw](seed);
    return acc;
  }, {});

const extractPublicData = (wallet) =>
  parsedNetworks.reduce((acc, ntw) => {
    acc[ntw] = wallet[ntw].address;
    return acc;
  }, {});

const save = () => {
  const data = generate();
  fs.writeFileSync(".wallets.json", JSON.stringify(data, null, 2));
  fs.writeFileSync(
    ".wallets.pub.json",
    JSON.stringify(data.map(extractPublicData), null, 2)
  );
};

save();
