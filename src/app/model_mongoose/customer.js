const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer_name: {type: String, default: "Name of Customer"},
  customer_phone: String,
  customer_email: String,
  createdAt:{type: Date,default: Date.now}
});

const Customer = mongoose.model('Customer', customerSchema ,'customers');

module.exports = Customer;
