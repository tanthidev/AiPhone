const express = require('express');
const router = express.Router();

const customerController = require('../app/controllers/CustomerController');

router.get('/customer_search', customerController.searchCustomer);
router.get('/', customerController.customer);

module.exports = router;