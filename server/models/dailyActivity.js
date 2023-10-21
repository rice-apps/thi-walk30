const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')


const DailyActivity = new mongoose.Schema({
    ID: {
        required: true,
        type: ObjectId,
    },
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
    }
})

module.exports = mongoose.model('DailyActivity',DailyActivity)