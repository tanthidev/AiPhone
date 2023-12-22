
const Product = require('../model_mongoose/product');
const { mulToObject, singleToObject } = require('../util/mongoose');
const web3 = require('../../config/web3');
const contractAbi = require('../../../contracts/PaymentContract.json').abi;
const contractAddress = '0xEc90A7f9D13786095d8eF80aC47d5148777e1560';
const paymentContract = new web3.eth.Contract(contractAbi, contractAddress);
const { generateQRCode } = require('../util/qrcode');
const { makePayment } = require('../util/makePayment');
const paymentUtil = require('../util/makePayment');


class PosController {

    //GET /pos
   async pos(req, res) {
        try {
            const products =  await Product.find();
            res.render('pages/pos', { data: mulToObject(products)});
          } catch(error) {
            res.render('pages/error/error',{layout:'sub'});
          }
    }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }

    async cashPayment(req, res) {
      try {
          const orders = req.query.orders;
          const ordersArray = JSON.parse(decodeURIComponent(orders));
          res.render('pages/cashPayment', { orders: ordersArray, user: req.user.user });
        } catch {
          res.send('Wrong cashPayment');
        }
    }


    // Hàm để thực hiện thanh toán ETH
  async payWithETH(req, res) {
    try {

      const orders = req.query.orders;
      const ordersArray = JSON.parse(decodeURIComponent(orders));
      res.render('pages/payWithETH', { orders: ordersArray, user: req.user.user });
    } catch (error) {
      console.error('Error processing ETH payment:', error);
      throw error;
    }
  }

  async startListeningEvent(req, res) {
    try {
      
      
    } catch (error) {
      console.log(error);
    }
  }

   
}

module.exports = new PosController();
