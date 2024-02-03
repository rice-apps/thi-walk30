const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const DailyActivity = require('./dailyActivity');
const Event = require('./event')



const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
         
    },
    imgURL: {
        required: true,
        type: String
    },

    dailyActivities: {
        type: [DailyActivity.ObjectId]
    },
    upcomingEvents: {
        type: [Event.ObjectId]
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