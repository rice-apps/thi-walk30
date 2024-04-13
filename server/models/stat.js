const mongoose = require('mongoose');
const { ObjectId } = require("mongodb");
const Schema = mongoose.Schema;

const StatSchema = new Schema({
    type: {
        type: String,
        enum: ['pss', 'poms'],
        required: true
    },
    userId: {
        type: ObjectId,
        required: false
    },
    eventId: {
        type: ObjectId,
        required: false
    },
    data: Schema.Types.Mixed,
});

const Stat = mongoose.model('Stat', StatSchema);

module.exports = Stat;