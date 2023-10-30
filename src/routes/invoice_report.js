const express = require('express');
const router = express.Router();

const invoice_reportController = require('../app/controllers/Invoice_reportController');

router.get('/', invoice_reportController.invoice_report);

module.exports = router;