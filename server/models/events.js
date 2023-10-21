const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    featured_img: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Events", dataSchema);