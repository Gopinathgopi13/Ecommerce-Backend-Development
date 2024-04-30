const express = require('express');
const router = express.Router();
const User = require("../Models/user");

router.post('/submit', async (req, res) => {
    try {
      const newUser = new User(req.body);
      console.log(newUser)
    //   await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add user' });
    }
  });

  module.exports = router;