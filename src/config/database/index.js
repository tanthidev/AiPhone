const mongoose = require('mongoose');

function connect(params) {
    const mongoURI = 'mongodb+srv://aiphone:aiphone@aiphone.fpwmwom.mongodb.net/?retryWrites=true&w=majority';
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB Atlas');
    });
}

module.exports = {connect};


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://aiphone:aiphone@aiphone.fpwmwom.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function connect() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

module.exports = {connect};
