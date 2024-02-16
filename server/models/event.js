const mongoose = require("mongoose");
const TLocation = require("./location");
const Organization = require("./organization");

const dataSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  // Duration in minutes
  duration: {
    type: Number,
    required: true,
  },
  location: {
    type: TLocation.schema,
    required: true,
  },
  organization: {
    type: Organization.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model("Events", dataSchema);
