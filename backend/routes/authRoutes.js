
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register Route
router.post('/register', async (req, res) => {
  const { name, email, password, bio } = req.body;

  console.log('📥 Registration Request:', req.body); // Log incoming request

  // Check if all fields are provided
  if (!name || !email || !password || !bio) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'Email already registered' });
    }

    // Create user
    const user = await User.create({ name, email, password, bio });
    console.log('✅ User created:', user); // Log success
    res.status(201).json(user);
  } catch (err) {
    console.error('❌ Registration error:', err.message); // Log failure
    res.status(500).json({ error: err.message });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    res.json(user);
  } catch (err) {
    console.error('❌ Login error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
