const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  authorName: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', postSchema);
