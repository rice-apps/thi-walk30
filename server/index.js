const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const express = require('express');
const routes = require("./routes");
const cors = require('cors');
const morgan = require("morgan");
<<<<<<< HEAD
=======
const { default: mongoose } = require('mongoose');
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77


const uri = "mongodb+srv://" + process.env.MONGO_ADMIN_USERNAME + ":" + process.env.MONGO_ADMIN_PASSWORD + "@thi-cluster.hppzt17.mongodb.net/?retryWrites=true&w=majority";

<<<<<<< HEAD
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

=======
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77
async function run() {  
    try {
        await mongoose.connect(uri)
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        const app = express();

        app.use(express.json());
        app.use(cors());
        app.use(morgan("tiny"));
        app.use('/api', routes);

        app.listen(3000, () => {
            console.log(`Server started at ${3000}`);
        })
<<<<<<< HEAD
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
=======
    } catch (error) {
        console.log(error);
>>>>>>> 3799a0a1ae022420ff10b334a2d7723c12090d77
    }
}

run().catch(console.dir);