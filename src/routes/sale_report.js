const express = require('express');
const router = express.Router();

const sale_reportController = require('../app/controllers/Sale_reportController');

router.get('/', sale_reportController.sale_report);

module.exports = router;