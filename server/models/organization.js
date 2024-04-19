const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  phone_number: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  img: {
    required: false,
    type: String,
  },
});

module.exports = mongoose.model("Organization", organizationSchema);
