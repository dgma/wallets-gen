const { Keypair } = require("@solana/web3.js");
const { save } = require("./save");

const amount = process.env.AMOUNT || 1;

const genSol = () =>
  Array.from({ length: amount }).reduce((acc, _, i) => {
    const keyPair = Keypair.generate();
    acc.push({
      // base58 encoded strin
      addr: keyPair.publicKey.toString(),
      pk: Buffer.from(keyPair.secretKey).toString("hex"),
    });
    return acc;
  }, []);

module.exports = {
  genSol,
};

if (require.main === module) {
  save("sol", genSol());
}
