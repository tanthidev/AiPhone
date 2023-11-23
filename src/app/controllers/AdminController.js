const CustomerModel = require('../models/customer.model')
const EmployeeModel = require('../models/employee.model')
const ProductModel = require('../models/product.model')

class AdminController {

    //GET /customer
    async admin(req, res) {
        try {
            const customers = await CustomerModel.getCustomers();
            const products = await ProductModel.getProducts();
            const employees = await EmployeeModel.getEmployees();

            res.render("pages/admin", { customers, products, employees });
        } catch (error) {
            // Xử lý lỗi nếu có
            console.error(error);
            res.status(500).send("Internal Server Error");
        }
    }
}

module.exports = new AdminController();
