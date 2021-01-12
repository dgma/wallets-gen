const fs = require('fs');
const bitcoin = require('bitcoinjs-lib');

const keyPair = bitcoin.ECPair.makeRandom();
const data = `
address: ${bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey }).address}
public: ${keyPair.publicKey.toString('hex')}
private: ${keyPair.toWIF()}
`;
fs.writeFileSync('.btc', data)