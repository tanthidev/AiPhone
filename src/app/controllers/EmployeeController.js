const EmployeeModel = require('../models/employee.model')
const nodemailer = require('nodemailer');
const { deleteEmployee } = require('./AdminController');
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
            const employee = {
                employee_name: full_name,
                employee_phone: phone_number,
                employee_email: email_address,
                account_status: "inactive", 
                hire_date: Date.now(), 
                is_admin: false,
                login: {
                    token: Math.random().toString(36).slice(-6),
                    expiration: Date.now()
                },
                username: email_address.split('@')[0],
                password: '',
                profile_picture: ''
                } 


            // Create token login
            const loginLink = `${process.env.DOMAIN}/login/${employee.login.token}`;
            
            // Save to database
            EmployeeModel.createEmployee(employee)
                .then(async() => {
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
                        text: `Dear ${employee_name},\n\nYour account has been created. Please click on the following link to log in: ${loginLink}`,
                    });
                    
                    // Send result
                    res.status(200).json({
                        success: true,
                        message: 'Account created successfully. Check your email for the login link.',
                    });
                })
                .catch(error =>{
                    res.status(500).json({
                        success: false,
                        message: '',
                      });
                })


            
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
              success: false,
              message: 'Error sending email. Please try again later.',
            });
        }
    }

    //Delete Employee
    deleteEmployee(req, res){
        const id = req.originalUrl.split('/')[2];
        EmployeeModel.deleteEmployee(id)
            .then(data => {
                res.redirect('/employee')
            }) 
            .catch(error =>{
                // res.redirect('/employee')
            })
    }

}

module.exports = new EmployeeController();
