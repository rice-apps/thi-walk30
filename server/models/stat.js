const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatSchema = new Schema({
  type: { 
    type: String, 
    enum: ['pss', 'poms'],
    required: true
  },
  data: Schema.Types.Mixed,
});

const Stat = mongoose.model('Stat', StatSchema);

module.exports = Stat;

