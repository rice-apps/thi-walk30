const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const DailyActivity = require('./dailyActivity');



const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
         
    },
    ID: {
        required: true,
        type: ObjectId

    },
    imageID: {
        required: true,
        type: String
    },

    dailyActivities: {
        required: true,
        type: [DailyActivity.ID]
    },
    upcomingEvents: {
        required: true,
        type: [DailyActivity.ID]
    },

    dateJoined: {
        required: true,
        type: Date
    },


})

module.exports = mongoose.model('User',userSchema)