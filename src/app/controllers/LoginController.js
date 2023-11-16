require('dotenv').config();
const EmployeeModel = require('../models/employee.model')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class LoginController {
    //GET /home
    login(req, res) {
        const error = req.query.error; // Get the error from the query parameters
        res.render("pages/login", {layout: 'sub' , error})
    }
    
    async authLogin(req, res){
        try {
            const formData = req.body
            const account = await EmployeeModel.findAccount(formData.username)
            
            if (account && bcrypt.compareSync(formData.password, account.password)) {
                const userId = account._id
                const token = jwt.sign({ userId }, process.env.TOKEN_SECRET_KEY);
                res.cookie('token', token); // Sử dụng res.cookie để lưu trữ token
                return res.redirect('/'); 
            } else {
                return res.redirect('/login?error=Username+or+password+is+incorrect');
              }


        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = new LoginController();
