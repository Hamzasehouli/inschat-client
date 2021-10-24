const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: new Date(),
    },
    members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// conversationSchema.virtuals('reviews', {
//   ref: 'conversationReviews',
//   foreignField: 'conversationReviews',
//   localdField: '_id',
// });
// conversationSchema.virtuals('comments', {
//   ref: 'conversationComments',
//   foreignField: 'conversationComments',
//   localdField: '_id',
// });

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;
