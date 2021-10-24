const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: new Date(),
    },
    text: {
      type: String,
    },
    sender: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// MessageSchema.virtuals('reviews', {
//   ref: 'MessageReviews',
//   foreignField: 'MessageReviews',
//   localdField: '_id',
// });
// MessageSchema.virtuals('comments', {
//   ref: 'MessageComments',
//   foreignField: 'MessageComments',
//   localdField: '_id',
// });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
