require('dotenv').config();
const axios = require('axios');

const CLIENT_APP_ID = process.env.MONGODB_CLIENT_APP_ID; 
const API_KEY = process.env.MONGODB_API_KEY;
const baseRequestData = {
  "collection": "employees",
  "database": "AiPhoneStore",
  "dataSource": "AiPhone"
};

const EmployeeModel = {

  // Get all employee
  getEmployees: async () => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;  

      // Add filter
      const requestData = { ...baseRequestData, filter: {} };

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

  // Find by name employee
  findByEmployeeName: async (name) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;


      const regexName = { $regex: name, $options: 'i' }; // 'i' option for case-insensitive search

      const requestData = {...baseRequestData, filter:{"employee_name": regexName}}

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


  // Find by employee id
  findByEmployeeId: async (id) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;
      requestData.filter= {
        "_id": {"$oid": id}
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

  // Get password, username for auth
  findAccount: async (username) => {
    try {
      // API 
      const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/findOne`;
      
      const requestData = {...baseRequestData, filter: {"username": username}}
      
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
        return (response.data.document);

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
        employee_name,
        employee_phone,
        employee_email,
        account_status, 
        hire_date,
        is_admin,
        login,
        username,
        password,
        profile_picture
        } = employee
      
      const requestData = {...baseRequestData, document: {
        employee_name,
        employee_phone,
        employee_email,
        account_status, 
        hire_date,
        is_admin,
        login,
        username,
        password,
        profile_picture
      }}



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
        employee_name,
        employee_phone,
        employee_email,
        account_status, 
        hire_date,
        is_admin,
        username,
        password,
        profile_picture
        } = employee

      requestData.filter= {
        "employee_id": employee_id
      }

      requestData.update= {
        "$set": {
          employee_name,
          employee_phone,
          employee_email,
          account_status, 
          hire_date,
          is_admin,
          username,
          password,
          profile_picture
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

      const requestData = {
        ...baseRequestData, 
        filter: {
          "_id": employee_id
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
      // Handle the error appropriately
      console.error('Error in model employee:', error);
      throw error; // Rethrow the error or handle it according to your needs
    }
  }
}


module.exports = EmployeeModel;
