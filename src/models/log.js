const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const log = new Schema({
  typeAction: {
    type: String,
    enum: {
      values: ['C', 'R', 'U', 'D'],
    }
  },
  action: {
    type: String,
    required: [true, 'A ação realizada é Obrigatório !']
  },
  user: {
    type: String,
  },
  dataAction: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Log', log);
