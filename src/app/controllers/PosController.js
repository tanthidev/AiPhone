const ProductModel = require('../models/product.model')
const Product = require('../model_mongoose/product');
const { mulToObject } = require('../util/mongoose');
const { singleToObject } = require('../util/mongoose');

class PosController {

    //GET /pos
    pos(req, res) {
        try {
            const products =  Product.find();
            res.render('pages/pos', { data: products});
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
