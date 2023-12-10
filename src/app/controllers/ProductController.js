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

        async searchProduct(req, res) {
            try {
                const product = await Product.findOne({ barcode: req.query.barcode });
                console.log(req.query.barcode);
                console.log(product);
                res.status(200).json({ data: product });
            } catch (error) {
                res.send("Render Admin Error");
            }
        } 
    }
module.exports = new ProductController();
