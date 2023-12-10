
const nodemailer = require('nodemailer');
const { deleteEmployee } = require('./AdminController');
const Employee = require('../model_mongoose/employee');
const { mulToObject,singleToObject } = require('../util/mongoose');
require('dotenv').config

class EmployeeController {
    async employee(req, res) {
        try {
            const employees = await Employee.find();
            res.render("pages/employee/listemployee", { data: mulToObject(employees)});
        } catch {
            res.send('Error');
        }
    }



    // Add employee
    createEmployee(req, res) {
        
        res.render("pages/employee/createEmployee")
    }

    async handleCreateEmployee(req, res) {
        try {
            // Data from form submit
            const { full_name, phone_number, email_address } = req.body;

                //Create token
                const token = Math.random().toString(36).slice(-6);

                //Create Schema Employee
                const newEmployee = new Employee({
                    employee_name: full_name,
                    employee_phone: phone_number,
                    employee_email: email_address,
                    username: email_address.split('@')[0],
                    login: {
                        token: token,
                        expiration: Date.now()
                    },
                })


            // Create token login
            const loginLink = `${process.env.DOMAIN}/login/${token}`;
            

            // Save the user to the database
            newEmployee.save()
                .then(async() => {
                    try {
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
                        const successMessage = 'Account created successfully. Check your email for the login link.';
                        res.redirect(`/admin_employee/employee_add?message=${encodeURIComponent(successMessage)}`);

                        } catch (error) {
                                // If an error occurs during account creation or email sending
                                const errorMessage = 'Failed to create account: ' + error.message;
                                // Redirect to a route that renders the view with the error message
                                res.redirect(`/admin_employee/employee_add?message${encodeURIComponent(errorMessage)}`);
                        }
                })
                .catch(error => {
                    // If an error occurs during account creation or email sending
                    const errorMessage = 'Failed to save account to database: ' + error.message;
                    // Redirect to a route that renders the view with the error message
                    res.redirect(`/admin_employee/employee_add?message${encodeURIComponent(errorMessage)}`);
                });

        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
              success: false,
              message: 'Error sending email. Please try again later.',
            });
            // If an error occurs during account creation or email sending
            const errorMessage = 'Error sending email:' + error.message;
            // Redirect to a route that renders the view with the error message
            res.redirect(`/admin_employee/employee_add?message${encodeURIComponent(errorMessage)}`);
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
