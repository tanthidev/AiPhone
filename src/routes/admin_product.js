const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.get('/product_add', adminController.addProduct);
router.post('/product_store', adminController.storeProduct);
router.post('/product_updateOne_:id',adminController.updateOneProduct)
router.get('/product_:id', adminController.updateProduct);
router.delete('/product_delete/:id', adminController.deleteProduct);
router.get('/', adminController.adminProduct);

module.exports = router;