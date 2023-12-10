require('dotenv').config();
const EmployeeModel = require('../models/employee.model')
const Employee = require('../model_mongoose/employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { mulToObject, singleToObject } = require('../util/mongoose');

class LoginController {
    //GET /home
    login(req, res) {
        const error = req.query.error; // Get the error from the query parameters
        res.render("pages/login/login", {layout: 'sub' , error})
    }
    
    async authLogin(req, res){
        try {
            const formData = req.body
            const employee = await Employee.findOne({ username: formData.username});
            if (employee && bcrypt.compareSync(formData.password, employee.password)) {
                const user = employee
                const token = jwt.sign({ user }, process.env.TOKEN_SECRET_KEY);
                res.cookie('token', token); // Sử dụng res.cookie để lưu trữ token
                return res.redirect('/'); 
            } else {
                return res.redirect('/login?error=Username+or+password+is+incorrect');
              }


        } catch (error) {
            res.redirect(`/login?error=${error}`);
        }

    }

    async checkTokenActive(req, res){
        //get token

        const token = req.originalUrl.split('/')[2];
        
        //check token from database
        const employee = singleToObject(await Employee.findOne({'login.token':token}));
        if(employee){
            const currentDate = new Date();
            const differenceInMilliseconds = currentDate - employee.login.expiration; // Difference in milliseconds
            const differenceInSeconds  = Math.floor(differenceInMilliseconds / 1000); // Convert milliseconds to minutes
            
            if(differenceInSeconds > 600){
                res.render('pages/error/error', {layout: 'sub', error: 'Login link has expired.'})
            } else {
                res.redirect(`/login/set-password/${token}`)
            }

        } else {

        }
    }

    async setPassword(req, res){
        const token = req.originalUrl.split('/')[3];
        res.render('pages/login/setPassword', {layout: 'sub', token})
    }

    async handleSetPassword(req, res){
        const token = req.body.token
        const password = req.body.password
        
        //Hash password
        bcrypt.hash(password, 10, async (err, hash) => {
            if (err) {
                console.log(err);
            } else {
              //Save password to database
              try {
                const result = await Employee.updateOne({'login.token':token}, {password: hash})
                res.redirect('/login')
              } catch (error) {
                res.render('pages/error/erorr', { layout:'sub', erorr})
              }
            }
        });
    }
}

module.exports = new LoginController();
