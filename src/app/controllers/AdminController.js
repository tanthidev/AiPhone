
const Customer = require('../model_mongoose/customer');
const Employee = require('../model_mongoose/employee');
const Product = require('../model_mongoose/product');
const Invoice = require('../model_mongoose/invoice');
const { render } = require('node-sass');
const { mulToObject } = require('../util/mongoose');
const { singleToObject } = require('../util/mongoose');
const { makePayment } = require('../util/makePayment');

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
              res.send(error.message);
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
          res.render('pages/error/error', {layout: 'sub'})
          }
      }

      storeProduct(req, res) {
        try {
            const product = new Product(req.body);
            if (req.file) {
              product.link_image = req.file.filename;
           }
           console.log(product.link_image)
            product.save();
            res.redirect('/admin_product');
          } catch (error) {
            res.render('pages/error/error', {layout: 'sub'})
          }
      }

      async storeInvoice(req, res) {
        try {
            const invoices = new Invoice(req.body);
            if(req.body.payment_method == 'ethereum'){
              const addressWallet = req.body.addressWallet;
              const pin = req.body.pin;
              const total_ETH = parseFloat(req.body.total_ETH).toString();
              
              makePayment(addressWallet, pin, total_ETH)
                .then(result => {
                  if(result.success){
                    console.log(`Payment successful! Transaction Hash: ${result.transactionHash}`);
                    invoices.save();
                    res.render("pages/success/paymentSuccessful", { transactionHash: result.transactionHash});

                  } else {
                    res.render("pages/error/error", { error: result.error});
                  }
                })
                .catch(error =>{
                  res.render("pages/error/error", { error: error});

                })
            } else { // Other payment method
              invoices.save();
              const invoice = await Invoice.find();
              res.render("pages/invoice/invoice", { data: mulToObject(invoice)});
            }
          } catch (error) {
            res.send(error);
          }
      }

      async addEmployee(req, res, next) {
          try {
              const message = req.query.message;
              res.render('pages/employee/createEmployee', { message });
          } catch (error) {
              res.render('pages/error/error', {layout: 'sub'})
              res.render('pages/employee/createEmployee', { message: error.message });
          }
      }

      async deleteEmployee(req, res, next) {
        try{
          await Employee.deleteOne({_id: req.params.id})
          res.redirect('/admin_employee');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      }

      async addCustomer(req, res) {
          try {
          res.render('pages/customer/customer_add');
          } catch (error) {
          res.render('pages/error/error', {layout: 'sub'})
          }
      }

      storeCustomer(req, res) {
          try {
              console.log(req.body)
              const customer = new Customer(req.body);
              customer.save();
              res.redirect('/admin_customer');
            } catch (error) {
              res.render('pages/error/error', {layout: 'sub'})
            }
      }
      // storeEmployee(req, res) {
      //     try {
      //         console.log(req.body)
      //         const employee = new Employee(req.body);
      //         if(req.file)
      //         {
      //           console.log(req.file.path);
      //           employee.profile_picture = req.file.path;
      //         }
      //         console.log(req.body)
      //         employee.save();
      //         res.redirect('/admin_employee');
      //       } catch (error) {
      //         console.error(error); // Log the error to the console
      //         res.status(500).json(error);
      //     }
      // }
      storeEmployee(req, res) {
        try {
            console.log(req.body);
            const employee = new Employee(req.body);
            
            if (req.file) {
                employee.profile_picture = req.file.filename;
            }
            
            console.log(employee.profile_picture);
            employee.save();
            res.redirect('/admin_employee');
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    
      
      async updateEmployee(req, res, next) {
        try{
          const employee = await Employee.findById(req.params.id)
          res.render('pages/employee/employee_update', {employee: singleToObject(employee)});
        }catch {
          res.render('pages/error/error', {layout: 'sub'})
        }
      }  

      
      async updateOneEmployee(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          
          if (req.file) {
            req.body.profile_picture = req.file.filename;
          }
          await Employee.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_employee');
          }catch{
            res.render('pages/error/error', {layout: 'sub'})
          }
        }

      async updateProduct(req, res, next) {
        try{
          const product = await Product.findById(req.params.id)
          res.render('pages/product/product_update', {product: singleToObject(product)});
        }catch {
          res.render('pages/error/error', {layout: 'sub'})
        }
      }  

      
      async updateOneProduct(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          if (req.file) {
            req.body.link_image = req.file.filename;
          }
          await Product.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_product');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      }
      
      async deleteProduct(req, res, next) {
        try{
          await Product.deleteOne({_id: req.params.id})
          res.redirect('/admin_product');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      } 

      async updateInvoice(req, res, next) {
        try{
          const invoice = await Invoice.findById(req.params.id)
          res.render('pages/invoice/invoice_update', {product: singleToObject(invoice)});
        }catch {
          res.render('pages/error/error', {layout: 'sub'})
        }
      }  

      
      async updateOneInvoice(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Invoice.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_invoice');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      }
      
      async deleteInvoice(req, res, next) {
        try{
          await Invoice.deleteOne({_id: req.params.id})
          res.redirect('/admin_invoice');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      } 
      async getDetailCustomer(req, res) {
          try {
            const customer = await Customer.findOne({ customer_name: req.params.customer_name });
            res.render('pages/customer/customer_detail', { data: singleToObject(customer) });
          } catch {
            res.render('pages/error/error', {layout: 'sub'})
          }
      }

      async updateCustomer(req, res, next) {
        try{
          const customer = await Customer.findById(req.params.id)
          res.render('pages/customer/customer_update', {customer: singleToObject(customer)});
        }catch {
          res.render('pages/error/error', {layout: 'sub'})
        }
      }  

      async updateOneCustomer(req, res, next) {
        try{
          console.log(req.params.id)
          console.log(req.body)
          await Customer.updateOne({ _id: req.params.id }, req.body)
          res.redirect('/admin_customer');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
        }
      }
      
      async deleteCustomer(req, res, next) {
        try{
          await Customer.deleteOne({_id: req.params.id})
          res.redirect('/admin_customer');
        }catch{
          res.render('pages/error/error', {layout: 'sub'})
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

      formattedDate(data){
        const day = String(data.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
        const month = String(data.getMonth() + 1).padStart(2, '0'); // Get month (zero-based) and pad with leading zero if necessary
        const year = data.getFullYear(); // Get full year

        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      }
}

module.exports = new AdminController();
