const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        required: true,
        type: String
    },
    img: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model("Organization", organizationSchema);