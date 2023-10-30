const EmployeeModel = require('../models/employee.model')

class HomeController {
        // GET /home
        async home(req, res, next) {
<<<<<<< HEAD
            try{
                const users = await User.getUsers()
                // res.send(JSON.parse(users).documents);
                const data = JSON.parse(users).documents
                
                res.render("pages/home",{data})
                //res.send(JSON.parse(users).documents);
                res.render("pages/home", {data})
            } catch (error){
                console.log(error);
                res.render("pages/home")
            }
=======
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

>>>>>>> 352c4015ef01264c204a5cd88f6eb9a8d7f60c8a
        }
}

module.exports = new HomeController();
 