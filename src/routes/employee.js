const express = require('express');
const router = express.Router();

const employeeController = require('../app/controllers/EmployeeController');

router.get('/create', employeeController.createEmployee)
router.post('/create', employeeController.handleCreateEmployee)
router.get('/', employeeController.employee);

module.exports = router;