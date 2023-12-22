const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  customer_name: {type: String, default: "Name of Customer"},
  customer_phone: String,
  customer_address: String,
  product_name: {
            type: [String],
            default: []
          },
  payment_method: String,
  total_ETH: String,
  total_price: String,
  recieved: String,
  exchange: String,
  createdAt:{type: Date,default: Date.now}
});

const Invoice = mongoose.model('Invoice', invoiceSchema ,'invoices');

module.exports = Invoice;
