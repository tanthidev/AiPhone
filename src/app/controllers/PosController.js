const ProductModel = require('../models/product.model')

class PosController {

    //GET /pos
    pos(req, res) {
        ProductModel.getProducts()
            .then(data =>{
                // res.send(data)
                res.render("pages/pos", {data})

            })
            .catch(error =>{

            })
        }

    //more
    show(req, res) {
        res.send('More in pos!!!')
    }
}

module.exports = new PosController();
