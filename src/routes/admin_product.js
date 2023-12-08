const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/product_add', adminController.addProduct);
router.post('/product_store', adminController.storeProduct);
router.get('/', adminController.adminProduct);

module.exports = router;