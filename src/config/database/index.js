const axios = require('axios');

const connect = () => {
    const CLIENT_APP_ID = 'data-wxhuv'; // Replace with your actual Client App ID
    const API_KEY = 'rmzcpHHrojvBlBtUreORp7wSach6jbYlAoQgPVtalXax8jO9E7IyaqlCEoqZ3YJK' // Replace with your actual API Key
    // const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/insertMany`;
    const apiUrl = `https://data.mongodb-api.com/app/${CLIENT_APP_ID}/endpoint/data/v1/action/find`

    var data = JSON.stringify({
        "collection": "users",
        "database": "AiPhoneStore",
        "dataSource": "AiPhone",
        "filter": {
            "status": "complete"
          },
          "limit": 10
    });

    var config = {
        method: 'post',
        url: apiUrl,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': API_KEY,
        },
        data: data
    };

    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
 
}

module.exports = {connect}