const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeechema = new Schema({
  employee_name: {type: String, default: "Name of Employee"},
  employee_phone: String,
  employee_email: String,
  hire_date:{type: Date,default: Date.now},
  account_status:String,
  login: {
    token: String,
    expiration: String
  },
  username:String,
  password:String,
  is_admin:{type: Boolean, default: false},
  profile_picture:{type: String, default:'https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080'}
});

const Employee = mongoose.model('Employee', employeechema,'employees');

module.exports = Employee;
