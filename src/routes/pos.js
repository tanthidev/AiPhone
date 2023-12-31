const express = require('express');
const router = express.Router();

const posController = require('../app/controllers/PosController');

router.get('/cashPayment', posController.cashPayment);
router.get('/payWithETH', posController.payWithETH)
router.post('/listenPayment', posController.startListeningEvent)
router.get('/:slug', posController.show);
router.get('/', posController.pos);

module.exports = router;   