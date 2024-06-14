const fs = require("fs");
const { genBtc } = require("./btc");
const { genEth } = require("./eth");
const { genSol } = require("./sol");
const { genTia, genAtom } = require("./cosmos");
const bip39 = require("bip39");

const amount = process.env.AMOUNT || 1;
const networks = process.env.NETWORKS || "btc,evm,sol,tia,atom";

// "btc,evm,sol,tia,atom"

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
    // const mnemonic = bip39.generateMnemonic();
    const mnemonic =
      "choose margin unique almost fit quality smile young weather advice helmet anchor";
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

fs.writeFileSync(".result.json", JSON.stringify(generate(), null, 2));
