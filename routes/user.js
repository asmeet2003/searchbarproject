// // routes/user.js
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const router = express.Router();

// router.post('/signup', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = new User({ username, password });
//     await user.save();
//     res.status(201).send('User created');
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) return res.status(400).send('User not found');
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) return res.status(400).send('Invalid password');
//     const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });
//     res.json({ token });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// module.exports = router;

// routes/user.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User created');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('User not found');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).send('Invalid password');
    
    // Create a JWT token
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

    // Send token and user ID in response
    res.json({ token, userId: user._id });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
