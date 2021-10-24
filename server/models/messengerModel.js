const mongoose = require('mongoose');

const messengerSchema = mongoose.Schema({
  addedAt: {
    type: Date,
    default: new Date(),
  },
  text: {
    type: String,
  },
  sender: {
    type: mongoose.Schema.ObjectId,
  },
});

const Messenger = mongoose.model('Messenger', messengerSchema);

module.exports = Messenger;
