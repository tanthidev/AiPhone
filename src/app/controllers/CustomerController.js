
const Customer = require('../model_mongoose/customer');
const { mulToObject,singleToObject } = require('../util/mongoose');

class CustomerController {
    //GET /home
    async customer(req, res) {
      try {
          const customers = await Customer.find();
          res.render('pages/customer/customer', { data: mulToObject(customers), user: req.user.user});
        } catch {
          res.send('Error');
        }
    }
    //GET search Customer
    async searchCustomer(req, res) {
      try {
          const customer = await Customer.findOne({ customer_phone: req.query.customer_search });

          res.status(200).json({ data: customer });
        } catch (error) {
          res.send("Render Admin Error");
        }
    } 
}

module.exports = new CustomerController();
 