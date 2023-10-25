const User = require('../models/user.model')

class HomeController {
        // GET /home
        home(req, res, next) {
            res.render("pages/home")
            
        }
}

module.exports = new HomeController();
