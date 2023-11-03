const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const morgan = require("morgan");
const { default: mongoose } = require('mongoose');


const uri = "mongodb+srv://" + process.env.MONGO_ADMIN_USERNAME + ":" + process.env.MONGO_ADMIN_PASSWORD + "@thi-cluster.hppzt17.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

async function run() {  
    try {
        // Connect the client to the server
        // await client.connect();
        // // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });

        await mongoose.connect(uri);
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const app = express();

        app.use(express.json());
        app.use(cors());
        app.use(morgan("tiny"));
        app.use('/api', routes);

        app.listen(3000, () => {
            console.log(`Server started at ${3000}`);
        })
    } finally {
        // Ensures that the client will close when you finish/error
        await mongoose.connection.close();
    }
}

run().catch(console.dir);