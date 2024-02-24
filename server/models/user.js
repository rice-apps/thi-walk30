const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const DailyActivity = require('./dailyActivity');
const Event = require('./event')



const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String

    },
    img: {
        required: true,
        type: String
    },

    dailyActivities: {
        type: ObjectId,
        ref: 'DailyActivity'
    },
    upcomingEvents: {
        type: ObjectId,
        ref: 'Events'
    },

    dateJoined: {
        required: true,
        type: Date
    },

    adminStatus: {
        required: true,
        type: Boolean
    }
})

module.exports = mongoose.model('User',userSchema)