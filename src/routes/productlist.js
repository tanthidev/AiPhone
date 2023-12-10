const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/product_search', productController.searchProduct);
router.get('/:slug', productController.product);

router.get('/', productController.product);

module.exports = router;
