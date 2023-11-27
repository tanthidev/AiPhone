const ProductModel = require('../models/product.model')
const Product = require('../model_mongoose/product');
const { mulToObject, singleToObject } = require('../util/mongoose');


class PosController {

    //GET /pos
   async pos(req, res) {
        try {
            const products =  await Product.find();
            res.render('pages/pos', { data: mulToObject(products)});
          } catch {
            res.send('Error');
          }
    }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }
}

module.exports = new PosController();
