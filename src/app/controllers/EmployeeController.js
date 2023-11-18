const EmployeeModel = require('../models/employee.model')
const nodemailer = require('nodemailer');
require('dotenv').config

class EmployeeController {
    //GET /home
    employee(req, res) {
        EmployeeModel.getEmployees()
            .then(data =>{
                // res.send(data)
                res.render("pages/employee/listEmployee", {data})

            })
            .catch(error =>{

            })
        // res.render("pages/employee/listEmployee")
    }


    // Add employee
    createEmployee(req, res) {
        res.render("pages/employee/createEmployee")
    }

    async handleCreateEmployee(req, res) {
        try {
            // Data from form submit
            const { full_name, phone_number, email_address } = req.body;
            


            // Create token login
            const login = {
                token: '',
                expiration: Date.now()
            }
            login.token = Math.random().toString(36).slice(-6);
            const loginLink = `${process.env.DOMAIN}/login/${login.token}`;
            
            // Config nodemailer
            const transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: process.env.EMAIL, // your Gmail address
                pass: process.env.PASSWORD_EMAIL, // your Gmail app password
              },
            });
        
            // Send email
            const info = await transporter.sendMail({
              from: process.env.EMAIL,
              to: email_address,
              subject: 'Account Created',
              text: `Dear ${full_name},\n\nYour account has been created. Please click on the following link to log in: ${loginLink}`,
            });
        
            // Send result
            res.status(200).json({
              success: true,
              message: 'Account created successfully. Check your email for the login link.',
            });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
              success: false,
              message: 'Error sending email. Please try again later.',
            });
        }
    }

}

module.exports = new EmployeeController();
