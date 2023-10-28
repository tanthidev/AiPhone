const express = require('express');
const router = express.Router();

const invoiceController = require('../app/controllers/InvoiceController');

router.get('/', invoiceController.invoice);

module.exports = router;
