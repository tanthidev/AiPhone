const express = require('express');
const router = express.Router();

const posController = require('../app/controllers/PosController');

router.get('/:slug', posController.show);
router.get('/', posController.pos);

module.exports = router;