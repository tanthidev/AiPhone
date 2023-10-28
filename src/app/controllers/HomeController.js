const User = require('../models/user.model')

class HomeController {
        // GET /home
        async home(req, res, next) {
            try{
                const users = await User.getUsers()
                // res.send(JSON.parse(users).documents);
                
                res.render("pages/home")
            } catch (error){
                console.log(error);
                res.render("pages/home")
            }
        }
}

module.exports = new HomeController();
