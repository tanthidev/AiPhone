require('dotenv').config();
const axios = require('axios');

const CLIENT_APP_ID = process.env.MONGODB_CLIENT_APP_ID; // Replace with your actual Client App ID
const API_KEY = process.env.MONGODB_API_KEY;
let requestData = {
  "collection": "employees",
  "database": "AiPhoneStore",
  "dataSource": "AiPhone",
};

const EmployeeModel = {
  getEmployees: async () => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;  

      // Add filter
      requestData.filter = {}

      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: JSON.stringify(requestData)
      };

      // get data from api
      const response = await axios(config);
        return (response.data.documents);
      
    } catch (error) {
      throw error;
    }
  },

  findByEmployeeName: async (name) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;


      const regexName = { $regex: name, $options: 'i' }; // 'i' option for case-insensitive search

      requestData.filter= {
        "employee_name": regexName
      }


      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: JSON.stringify(requestData)
      };

      // get data from api
      const response = await axios(config);
        return (response.data.documents);

    } catch (error) {
      throw error;
    }
  },

  // Create Employee
  createEmployee: async (employee) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/insertOne`;

      const {
        employee_id,
        employee_name,
        employee_phone,
        employee_email,
        active, 
        hire_date,
        authentication,
        } = employee
      
      requestData.document= {
        employee_id,
        employee_name,
        employee_phone,
        employee_email,
        active, 
        hire_date,
        authentication,
      }


      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: JSON.stringify(requestData)
      };

      // get data from api
      const response = await axios(config);
        return (response.data);

    } catch (error) {
      throw error;
    }
  },

  //UpdateEmployee
  updateEmployee: async (employee) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/updateOne`;

      const {
        employee_id,
        employee_name,
        employee_phone,
        employee_email,
        active, 
        hire_date,
        authentication,
        } = employee

      requestData.filter= {
        "employee_id": employee_id
      }

      requestData.update= {
        "$set": {
          employee_name,
          employee_phone,
          employee_email,
          active, 
          hire_date,
          authentication,
        }
      }


      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: JSON.stringify(requestData)
      };

      // get data from api
      const response = await axios(config);
        return (response.data);

    } catch (error) {
      throw error;
    }
  },

  //Delete Employee
  deleteEmployee: async(employee_id) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/deleteOne`;


      requestData.filter= {
        "employee_id": employee_id
      }

      const config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: JSON.stringify(requestData)
      };

      // get data from api
      const response = await axios(config);
        return (response.data);

    } catch (error) {
      throw error;
    }
  },
}


module.exports = EmployeeModel;
