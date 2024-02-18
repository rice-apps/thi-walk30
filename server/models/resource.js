const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");

const resourceSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  link: {
    required: true,
    type: String,
  },
  img: {
    required: true,
    type: String,
  },
  organization: {
    type: ObjectId,
    required: true,
  },
});
module.exports = mongoose.model("Resource", resourceSchema);
