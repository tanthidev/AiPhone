require('dotenv').config();
const web3 = require('../../config/web3');
const contractAbi = require('../../../contracts/PaymentContract.json').abi;
const contractAddress =  process.env.CONTRACTADRESS;
const privateKey = process.env.PRIVATE_KEY_ETH;
const ethers = require('ethers');
const paymentContract = new web3.eth.Contract(contractAbi, contractAddress);
const QRCode = require('qrcode');
function toWei(ethValue) {
  return web3.utils.toWei(ethValue.toString(), 'ether');
}

async function makePayment(address, privateKey, amount) {
  try { 
        const account = web3.eth.accounts.privateKeyToAccount(privateKey);
        const gas = await paymentContract.methods.makePayment().estimateGas();
        const gasPrice1 = await web3.eth.getGasPrice();
        const gasPrice = gasPrice1 *2

        const transaction = {
            from: address,
            to: process.env.SHOP_ADDRESS,
            value: web3.utils.toWei(amount.toString(), 'ether'),
            gas,
            gasPrice,
            data: paymentContract.methods.makePayment().encodeABI(),
        };
        
        // Theo dõi sự kiện PaymentReceived

        const signedTransaction = await web3.eth.accounts.signTransaction(transaction, privateKey);
        const receipt = await web3.eth.sendSignedTransaction(signedTransaction.rawTransaction);
        // Check transaction status and return appropriate information
        if (receipt.status) {
          return { success: true, transactionHash: receipt.transactionHash };
        } else {
          // Handle unsuccessful transaction
          return { success: false, error: 'Transaction failed' };
        }
  } catch (error) {
      // Log or handle errors appropriately
      return { success: false, error: error.message };
  }
}





module.exports = {
  makePayment
};
