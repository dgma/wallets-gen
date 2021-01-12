const fs = require('fs');
const Web3 = require('web3');

const web3 = new Web3();

const keyPair = web3.eth.accounts.create();

const data = `
address: ${keyPair.address}
private: ${keyPair.privateKey}
`

fs.writeFileSync('.eth', data)