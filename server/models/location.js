const mongoose = require("mongoose");

const TLocation = new mongoose.Schema({
  latitude: {
    required: true,
    type: Number,
  },
  longitude: {
    required: true,
    type: Number,
  },
  address: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Location", TLocation);
