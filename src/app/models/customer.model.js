require('dotenv').config();
const axios = require('axios');

const CLIENT_APP_ID = process.env.MONGODB_CLIENT_APP_ID; // Replace with your actual Client App ID
const API_KEY = process.env.MONGODB_API_KEY;
let requestData = {
  "collection": "customers",
  "database": "AiPhoneStore",
  "dataSource": "AiPhone",
};

const CustomerModel = {
    
}

module.exports = CustomerModel;
