const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: {type: String, default: "Name of Product"},
  series: String,
  inventory_quantity: String,
  link_product: String,
  barcode: String,
  import_price: {
    64: String,
    128: String,
    256: String,
    512: String
},
  retail_price: {
    64: String,
    128: String,
    256: String,
    512: String
  },
  created_at:{type: Date,default: Date.now},
  colors: {
    type: [String],
    default: ['Black', "White", "Gold"]
  },
  link_image: String,
  configuration: {
      screen: String,
      OS: String,
      camera_font: String,
      camera_back: String,
      chip: String,
      ram: String,
      sim: String,
      pin: String
  }
});

const Product = mongoose.model('Product', productSchema,'products');

module.exports = Product;
