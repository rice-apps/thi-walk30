const mongoose = require("mongoose");
const { Schema } = mongoose;
const TLocation = require("./location");



const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Schema.Types.ObjectId
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
    },
    date: {
        required: true,
        type: Date
    },
    location: {
        required: true,
        type: TLocation
    }
})

module.exports = mongoose.model("Events", dataSchema);