const express = require('express');
const router = express.Router();

const reportController = require('../app/controllers/ReportController');

router.get('/data', reportController.data);
router.get('/sale', reportController.sale);
router.get('/invoice', reportController.invoice)

module.exports = router;