const CustomerModel = require('../models/customer.model')
const Customer = require('../model_mongoose/customer');
const { mulToObject,singleToObject } = require('../util/mongoose');

class CustomerController {
    //GET /home
    async customer(req, res) {
        try {
            const customers = await Customer.find();
            res.render('pages/customer/customer', { data: mulToObject(customers)});
          } catch {
            res.send('Error');
          }
    }
    //GET search Customer
    async searchCustomer(req, res) {
        try {
            const customer = await Customer.findOne({ customer_name: req.query.customer_search });
            console.log(req.query.customer_search);
            console.log(customer);
            res.render('pages/customer/customer', { dataSearch: singleToObject(customer) });
          } catch (error) {
              res.send("Render Admin Error");
          }
    } 
}

module.exports = new CustomerController();
 