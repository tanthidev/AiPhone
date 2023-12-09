const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const upload = require('../middlewares/upload');

router.post('/delete-employee-:id',adminController.deleteEmployee)
router.post('/updateOne-employee-:id',upload.single('profile_picture'),adminController.updateOneEmployee)
router.get('/update-employee-:id',adminController.updateEmployee)
router.get('/employee_add',adminController.addEmployee)
router.post('/employee_store',upload.single('profile_picture'),adminController.storeEmployee)
router.get('/', adminController.adminEmployee);

module.exports = router;