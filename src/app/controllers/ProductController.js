const ProductModel = require('../models/product.model')

class ProductController {
    //GET /home
    product(req, res) {
        ProductModel.getProducts()
            .then(data =>{
                // res.send(data)
                res.render("pages/productlist", {data})
                
            })
            .catch(error =>{

            })
    }
}

module.exports = new ProductController();
 