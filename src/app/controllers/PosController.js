
const Product = require('../model_mongoose/product');
const { mulToObject, singleToObject } = require('../util/mongoose');


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
          console.log(ordersArray);
          res.render('pages/cashPayment', { orders: ordersArray, user: req.user.user });
        } catch {
          res.send('Wrong cashPayment');
        }
    }
}

module.exports = new PosController();
