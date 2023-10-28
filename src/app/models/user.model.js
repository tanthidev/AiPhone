require('dotenv').config();
const axios = require('axios');

class User {
  constructor() {
    this.CLIENT_APP_ID = process.env.MONGODB_CLIENT_APP_ID; // Replace with your actual Client App ID
    this.API_KEY = process.env.MONGODB_API_KEY;
  }

  async getUsers() {
    try {
      const apiUrl = `https://data.mongodb-api.com/app/${this.CLIENT_APP_ID}/endpoint/data/v1/action/find`;
      
      const data = JSON.stringify({
        "collection": "users",
        "database": "AiPhoneStore",
        "dataSource": "AiPhone",
        "filter": {
        },
      });

      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': this.API_KEY,
        },
        data: data
      };

      const response = await axios(config);

      return JSON.stringify(response.data);
    } catch (error) {
      return error;
    }
  }
}

module.exports = new User();
