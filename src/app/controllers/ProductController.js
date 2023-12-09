const Product = require('../model_mongoose/product');
const { mulToObject,singleToObject } = require('../util/mongoose');

class ProductController {

        async product(req, res) {
            try {
                const products = await Product.find();
                res.render("pages/product/productlist", { data: mulToObject(products)});
            } catch {
                res.send('Error');
            }
        }
    }
module.exports = new ProductController();
