const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/', (req, res) => {
  const newUser = new User();
  newUser.username = req.body.username;
  newUser.password = newUser.generateHash(req.body.password);

  newUser.save((err, user) => {
    if (err) return res.status(400).json({ error: 'Duplicate username' });
    return res.status(201).json(Object.assign({}, {
      user: {
        username: user.username
      }
    }));
  });
});

module.exports = router;
