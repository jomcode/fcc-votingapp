const express = require('express');
const router = express.Router();

const UserRepository = require('../storage/userrepository');
const generateHash = require('../helpers/hash').generateHash;

const storage = new UserRepository();

// register new user
router.post('/', (req, res) => {
  const newUser = Object.assign({}, req.body.user, {
    password: generateHash(req.body.user.password)
  });

  storage.create(newUser)
    .then(user => res.status(201).json({ user: { username: user.username } }))
    .catch(() => res.status(400).json({ error: 'Registration error' }));
});

module.exports = router;
