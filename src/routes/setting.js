const express = require('express');
const router = express.Router();

const settingController = require('../app/controllers/SettingController');
const LoginController = require('../app/controllers/LoginController');


router.get('/edit', settingController.edit);
router.post('/edit', settingController.handleEdit);
router.post('/edit-password', LoginController.handleChangePassword);
router.get('/', settingController.setting);

module.exports = router;