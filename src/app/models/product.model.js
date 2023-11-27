require('dotenv').config();
const axios = require('axios');

const CLIENT_APP_ID = process.env.MONGODB_CLIENT_APP_ID; // Replace with your actual Client App ID
const API_KEY = process.env.MONGODB_API_KEY;
let requestData = {
  "collection": "products",
  "database": "AiPhoneStore",
  "dataSource": "AiPhone", 
};

const ProductModel = {
    // Get all product
    getProducts: async () => {
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

    // Find by name product
    findByProductName: async (name) => {
        try {
        // API 
        const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`;


        const regexName = { $regex: name, $options: 'i' }; // 'i' option for case-insensitive search

        requestData.filter= {
            "product_name": regexName
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

    // Create Product
    createProduct: async (product) => {
        try {
        // API 
        const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/insertOne`;

        const {
            product_name,
            series,
            colors,
            inventory_quantity,
            link_product,
            barcode,
            import_price,
            retail_price,
            created_at,
            } = employee
        
        requestData.document= {
            product_name,
            series,
            colors,
            inventory_quantity,
            link_product,
            barcode,
            import_price,
            retail_price,
            created_at,
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
    updateProduct: async (product) => {
        try {
        // API 
        const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/updateOne`;

        const {
            product_name,
            series,
            colors,
            inventory_quantity,
            link_product,
            barcode,
            import_price,
            retail_price,
            } = product

        requestData.filter= {
            "employee_id": employee_id
        }

        requestData.update= {
            "$set": {
                product_name,
                series,
                colors,
                inventory_quantity,
                link_product,
                barcode,
                import_price,
                retail_price,
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

    //Delete Product
    deleteProduct: async(product_id) => {
        try {
        // API 
        const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/deleteOne`;


        requestData.filter= {
            "_id": product_id
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

module.exports = ProductModel;
