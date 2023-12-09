const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/invoice_store', adminController.storeInvoice);
router.put('/invoice_updateone/:id',adminController.updateOneInvoice)
router.get('/invoice_:id', adminController.updateInvoice);
router.delete('/invoice_delete/:id', adminController.deleteInvoice);
router.get('/', adminController.adminInvoice);

module.exports = router;