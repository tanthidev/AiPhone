const CustomerModel = require('../models/customer.model')
const EmployeeModel = require('../models/employee.model')
const ProductModel = require('../models/product.model')
const Customer = require('../model_mongoose/customer');
const Employee = require('../model_mongoose/employee');
const Product = require('../model_mongoose/product');
const Invoice = require('../model_mongoose/invoice');
const { render } = require('node-sass');
const { mulToObject } = require('../util/mongoose');
const { singleToObject } = require('../util/mongoose');

class AdminController {

      async adminCustomer(req, res) {
            try {
                const customer = await Customer.find();
                const customers=mulToObject(customer);
                res.render("pages/admin/admin_customer",{customers});
            } catch (error) {
                res.send("Render Admin Error");
            }
      }
      async adminEmployee(req, res) {
          try {
              const employee = await Employee.find();
              const employees=mulToObject(employee);
              res.render("pages/admin/admin_employee",{employees});
          } catch (error) {
              res.send("Render Admin Error");
          }
      }
      async adminInvoice(req, res) {
          try {
              const invoice = await Invoice.find();
              const invoices=mulToObject(invoice);
              res.render("pages/admin/admin_invoice",{invoices});
          } catch (error) {
              res.send("Render Admin Error");
          }
      }
      async adminProduct(req, res) {
        try {
            const product = await Product.find();
            const products=mulToObject(product);
            res.render("pages/admin/admin_product",{products});
        } catch (error) {
            res.send("Render Admin Error");
        }
      }

      async addProduct(req, res) {
          try {
          res.render('pages/product/product_add');
          } catch (error) {
          res.status(500).json(err);
          }
      }

      storeProduct(req, res) {
        try {
            console.log(req.body)
            const product = new Product(req.body);
            product.save();
            res.redirect('/admin_product');
          } catch (error) {
            res.status(500).json(err);
          }
      }

      async storeInvoice(req, res) {
        try {
            console.log(req.body)
            const invoices = new Invoice(req.body);
            invoices.save();
            const invoice = await Invoice.find();
            res.render("pages/invoice/invoice", { data: mulToObject(invoice)});
          } catch (error) {
            res.send('error storenvoice');
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
        try{
          await Employee.deleteOne({_id: req.params.id})
          res.redirect('/admin_employee');
        }catch{
          res.status(500).json(err);
        }
      }

      async addCustomer(req, res) {
          try {
          res.render('pages/customer/customer_add');
          } catch (error) {
          res.status(500).json(err);
          }
      }

      storeCustomer(req, res) {
          try {
              console.log(req.body)
              const customer = new Customer(req.body);
              customer.save();
              res.redirect('/admin_customer');
            } catch (error) {
              res.status(500).json(err);
            }
      }
      storeEmployee(req, res) {
          try {
              console.log(req.body)
              const employee = new Employee(req.body);
              employee.save();
              res.redirect('/admin_employee');
            } catch (error) {
              res.status(500).json(err);
            }
      }

      async updateEmployee(req, res, next) {
        try{
          const employee = await Employee.findById(req.params.id)
          res.render('pages/employee/employee_update', {employee: singleToObject(employee)});
        }catch {
          res.status(500).json(err);
        }
      }  

      
      async updateOneEmployee(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Employee.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_employee');
        }catch{
          res.status(500).json(err);
        }
      }

      async updateProduct(req, res, next) {
        try{
          const product = await Product.findById(req.params.id)
          res.render('pages/product/product_update', {product: singleToObject(product)});
        }catch {
          res.status(500).json(err);
        }
      }  

      
      async updateOneProduct(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Product.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_product');
        }catch{
          res.status(500).json(err);
        }
      }
      
      async deleteProduct(req, res, next) {
        try{
          await Product.deleteOne({_id: req.params.id})
          res.redirect('/admin_product');
        }catch{
          res.status(500).json(err);
        }
      } 

      async updateInvoice(req, res, next) {
        try{
          const invoice = await Invoice.findById(req.params.id)
          res.render('pages/invoice/invoice_update', {product: singleToObject(invoice)});
        }catch {
          res.status(500).json(err);
        }
      }  

      
      async updateOneInvoice(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Invoice.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_invoice');
        }catch{
          res.status(500).json(err);
        }
      }
      
      async deleteInvoice(req, res, next) {
        try{
          await Invoice.deleteOne({_id: req.params.id})
          res.redirect('/admin_invoice');
        }catch{
          res.status(500).json(err);
        }
      } 
      async getDetailCustomer(req, res) {
          try {
            const customer = await Customer.findOne({ customer_name: req.params.customer_name });
            res.render('pages/customer/customer_detail', { data: singleToObject(customer) });
          } catch {
            res.status(500).json(err);
          }
      }

      async updateCustomer(req, res, next) {
        try{
          const customer = await Customer.findById(req.params.id)
          res.render('pages/customer/customer_update', {customer: singleToObject(customer)});
        }catch {
          res.status(500).json(err);
        }
      }  

      async updateOneCustomer(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Customer.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_customer');
        }catch{
          res.status(500).json(err);
        }
      }
      
      async deleteCustomer(req, res, next) {
        try{
          await Customer.deleteOne({_id: req.params.id})
          res.redirect('/admin_customer');
        }catch{
          res.status(500).json(err);
        }
      } 

      async searchCustomer(req, res) {
        try {
            const customer = await Customer.findOne({customer_name: req.query.customer_search});
            const customers =customer;
            res.render("pages/admin/admin_customer", { customers});
          } catch (error) {
            res.send("Render Admin Error");
        }
      } 
}

module.exports = new AdminController();
