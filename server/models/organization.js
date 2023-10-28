const mongoose = require("mongoose");

const organizationSchema = moongose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId
    },
    name: {
        required: true,
        type: String
    },
    img: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model("Organization", organizationSchema);