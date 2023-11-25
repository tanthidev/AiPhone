const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/delete-employee-:id',adminController.deleteEmployee)
router.get('/employee_add',adminController.addEmployee)
router.post('/employee_store',adminController.deleteEmployee)
router.get('/customer_add',adminController.add)
router.post('/customer_store',adminController.store)
router.get('/', adminController.admin);

module.exports = router;