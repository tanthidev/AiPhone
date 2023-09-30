const mongoose = require('mongoose');

async function connect(params) {
    try {
        await mongoose.connect('mongodb://127.0.0.1/learn_nodejs');
        console.log("Connect Succesfully!!!");
    } catch (error) {
        console.log("Connect Fail!!!");
    }
}

module.exports = {connect};