const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");

const uri =
  "mongodb+srv://" +
  process.env.MONGO_ADMIN_USERNAME +
  ":" +
  process.env.MONGO_ADMIN_PASSWORD +
  "@thi-cluster.hppzt17.mongodb.net/?retryWrites=true&w=majority";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(morgan("tiny"));
    app.use("/api", routes);

    app.listen(3000, () => {
      console.log(`Server started at ${3000}`);
    });
  } catch (error) {
    console.log(error);
  }
}

run().catch(console.dir);