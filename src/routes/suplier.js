const express = require('express');
const router = express.Router();

const suplierController = require('../app/controllers/SuplierController');

router.get('/', suplierController.suplier);

module.exports = router;