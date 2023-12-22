const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.WebsocketProvider('wss://sepolia.infura.io/ws/v3/7f037d4862d64f398ccb7026810c86f9'));
module.exports = web3;