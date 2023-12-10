const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeechema = new Schema({
  employee_name: {type: String},
  employee_phone: String,
  employee_email: String,
  hire_date:{type: Date,default: Date.now},
  account_status:{type: String, default: 'inactive'},
  login: {
    token: String,
    expiration: Date,
  },
  username:String,
  password:{type:String, default:''},
  is_admin:{type: Boolean, default: false},
  profile_picture:{type: String, default:'https://th.bing.com/th/id/R.6b0022312d41080436c52da571d5c697?rik=ejx13G9ZroRrcg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-young-user-icon-2400.png&ehk=NNF6zZUBr0n5i%2fx0Bh3AMRDRDrzslPXB0ANabkkPyv0%3d&risl=&pid=ImgRaw&r=0'}
});

const Employee = mongoose.model('Employee', employeechema,'employees');

module.exports = Employee;
