const mongoose = require("mongoose");
const TLocation = require("./location");
const User = require("./user");
const { ObjectId } = require("mongodb");

const dataSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
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
    type: ObjectId,
    required: true,
  },
  participants: {
    type: [User.ObjectId],
    required: false,
  }
});

module.exports = mongoose.model("Events", dataSchema);
