const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const DailyActivity = new mongoose.Schema({
    step: {
        required: true,
        type: Number
    },
    miles: {
        required: true,
        type: Number
    },
    workoutTime: {
        required: true,
        type: Number
    },
    date: {
        required: true,
        type: Date
    },
    userID: {
        required: true,
        type: ObjectId
    }
})

module.exports = mongoose.model('DailyActivity',DailyActivity)