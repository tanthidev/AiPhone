const express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/LoginController');

router.post('/',loginController.authLogin)
router.get('/:token', loginController.checkTokenActive)
router.get('/set-password/:token', loginController.setPassword)
router.post('/set-password', loginController.handleSetPassword)
router.get('/', loginController.login);

module.exports = router;