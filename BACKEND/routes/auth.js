const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/authmiddleware');
const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body); // Add this to debug the request body

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const isMatch = await bcrypt.compare(password, hashedPassword); // Compare plaintext and hashed password
  console.log('Password match:', isMatch);
    // Create new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'User registration failed', details: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users', details: error.message });
  }
});

// Log in a user and generate JWT
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login Request:', email, password); // Log input credentials
  const trimmedPassword = password.trim(); 
  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found'); // Log when user isn't found
      return res.status(404).json({ error: 'User not found' });
    }

    console.log('User found:', user); // Log found user with hashed password
    console.log('Stored hashed password:', user.password); // Log stored password hash

    // Check if the password matches
    const isMatch = await bcrypt.compare(trimmedPassword, user.password); 
    console.log('Password match:', isMatch); // Log result of password comparison

    if (!isMatch) {
      console.log('Password comparison failed');
      return res.status(400).json({ error: 'Incorrect Password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.ACCESS_SECRET_TOKEN);
    console.log('JWT Token Generated:', token); // Log generated JWT

    res.status(200).json({ token, username: user.username, userId: user._id  });
  } catch (error) {
    console.log('Server error:', error.message); // Log any server errors
    res.status(500).json({ error: 'Server error', details: error.message });
  }
});



module.exports = router;


