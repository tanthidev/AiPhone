const CustomerModel = require('../models/customer.model')
const EmployeeModel = require('../models/employee.model')
const ProductModel = require('../models/product.model')
const Customer = require('../model_mongoose/customer');
const Employee = require('../model_mongoose/employee');
const Product = require('../model_mongoose/product');
const { render } = require('node-sass');
const { mulToObject } = require('../util/mongoose');
const { singleToObject } = require('../util/mongoose');

class AdminController {

    //GET /customer
    async admin(req, res) {
        try {
            const customer = await Customer.find();
            const employee = await Employee.find();
            const product = await Product.find();
            const customers=mulToObject(customer);
            const employees=mulToObject(employee);
            const products=mulToObject(product);
            res.render("pages/admin",{customers,employees,products});
        } catch (error) {
            res.send("Render Admin Error");
        }
    }

    async addEmployee(req, res, next) {
        try {
            res.render('pages/employee/employee_add');
            } catch (error) {
            res.status(500).json(err);
            }
    }

    async deleteEmployee(req, res, next) {
        
    }

    //Create a Customer
    async add(req, res) {
        try {
        res.render('pages/customer_add');
        } catch (error) {
        res.status(500).json(err);
        }
    }

    // Store a Customer
    store(req, res) {
        try {
            console.log(req.body)
            const customer = new Customer(req.body);
            customer.save();
            res.redirect('/admin');
          } catch (error) {
            res.status(500).json(err);
          }
}
}

module.exports = new AdminController();
