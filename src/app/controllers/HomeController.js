const Employee = require('../model_mongoose/employee')

class HomeController {
        // GET /home
        async home(req, res, next) {
            //Render page
            res.render("pages/home", {
                user: req.user.user
            })
            

        }
}

module.exports = new HomeController();
 