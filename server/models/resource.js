const mongoose = require("mongoose");
const organization = require("./organization");

const resourceSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
  featured_img: {
    required: true,
    type: String,
  },
  organization: {
    required: true,
    type: organization.schema,
  },
});
module.exports = mongoose.model("Resource", resourceSchema);
