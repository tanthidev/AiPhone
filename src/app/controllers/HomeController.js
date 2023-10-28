const User = require('../models/user.model')

class HomeController {
        // GET /home
        async home(req, res, next) {
            try{
                const users = await User.getUsers()
<<<<<<< HEAD
                // res.send(JSON.parse(users).documents);
                const data = JSON.parse(users).documents
                
                res.render("pages/home",{data})
=======
                //res.send(JSON.parse(users).documents);
                const data = JSON.parse(users).documents; 
                res.render("pages/home", {data})
>>>>>>> 6a82bc263d3878ce80fb3fb0955c428fbab437a1
            } catch (error){
                console.log(error);
                res.render("pages/home")
            }
        }
}

module.exports = new HomeController();
