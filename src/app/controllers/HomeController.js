const EmployeeModel = require('../models/employee.model')

class HomeController {
        // GET /home
        async home(req, res, next) {
            // console.log('render..');
            // res.render("pages/home")
            let employee;
            // EmployeeModel.deleteEmployee('A002')
            //     .then(data =>{
            //         employee = data;
            //     })
            //     .catch(error => {
            //         employee = data;
            //     });

            //Render page
            res.render("pages/home", {
                employee
            })

        }
}

module.exports = new HomeController();
