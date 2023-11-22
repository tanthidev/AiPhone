const CustomerModel = require('../models/customer.model')

class CustomerController {
    //GET /home
    customer(req, res) {
        CustomerModel.getCustomers()
            .then(data =>{
                // res.send(data)
                res.render("pages/customer", {data})
                
            })
            .catch(error =>{

            })
    }
}

module.exports = new CustomerController();
 