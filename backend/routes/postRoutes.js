

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

// ✅ Create a new post
router.post('/', async (req, res) => {
  const { content, authorId } = req.body;

  if (!content || !authorId) {
    return res.status(400).json({ error: 'Content and authorId are required' });
  }

  try {
    const post = await Post.create({ content, authorId });
    res.status(201).json(post);
  } catch (err) {
    console.error('❌ Post creation failed:', err.message);
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// ✅ Get all posts with author name and timestamp
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate('authorId', 'name');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// ✅ Get posts by specific user (for profile page)
router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const posts = await Post.find({ authorId: req.params.id }).sort({ createdAt: -1 });
    res.json({ user, posts });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch user posts' });
  }
});

module.exports = router;
