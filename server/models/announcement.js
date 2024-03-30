const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const Announcement = new mongoose.Schema({
    organization: {
        required: true,
        type: ObjectId
    },
    title: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    links: {
        required: true,
        type: [String]
    },
    featuredImage: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Announcement', Announcement)