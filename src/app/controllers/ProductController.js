class ProductController {
    //GET /news
    index(req, res) {
        res.render('pages/productlist');
    }

    show(req, res) {
        res.send('Something!!!');
    }
}

module.exports = new ProductController();
