const CustomerModel = require('../models/customer.model')
const Customer = require('../model_mongoose/customer');
const { mulToObject } = require('../util/mongoose');

class CustomerController {
    //GET /home
    async customer(req, res) {
        try {
            const customers = await Customer.find();
            res.render('pages/customer', { data: mulToObject(customers)});
          } catch {
            res.send('Error');
          }
    }
}

module.exports = new CustomerController();
 