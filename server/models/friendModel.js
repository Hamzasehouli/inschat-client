const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema(
  {
    created_at: {
      type: Date,
      default: new Date(),
    },
    members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// friendSchema.virtuals('reviews', {
//   ref: 'friendReviews',
//   foreignField: 'friendReviews',
//   localdField: '_id',
// });
// friendSchema.virtuals('comments', {
//   ref: 'friendComments',
//   foreignField: 'friendComments',
//   localdField: '_id',
// });

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;
