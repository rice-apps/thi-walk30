const mongoose = require("mongoose");
const TLocation = require("./location");

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
  featured_img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  location: {
    type: TLocation.schema,
    required: true,
  },
});

module.exports = mongoose.model("Events", dataSchema);
