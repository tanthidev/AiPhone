const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_name: {type: String, default: "Name of Product"},
  series: String,
  inventory_quantity: String,
  link_product: String,
  barcode: String,
  import_price: {
    type: Map,
    of: String,
    default: {
      "64GB": "Updating",
      "128GB": "Updating",
      "256GB": "Updating",
      "512GB": "Updating"    
    }
  },
  retail_price: {
    type: Map,
    of: String,
    default: {
      "64GB": "Updating",
      "128GB": "Updating",
      "256GB": "Updating",
      "512GB": "Updating"
    }
  },
  colors: {
    type: [String],
    default: ["Updating", "Updating", "Updating"]
  },
  link_image: String,
  configuration: {
    type: Map,
    of: String,
    default: {
      "screen": "Updating",
      "OS": "Updating",
      "camera_font": "Updating",
      "camera_back": "Updating",
      "chip": "Updating",
      "ram": "Updating",
      "sim": "Updating",
      "pin": "Updating",
    }
  },
  createdAt:{type: Date,default: Date.now}
});

const Product = mongoose.model('Product', productSchema,'products');

module.exports = Product;
