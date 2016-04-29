const express = require('express');

const UserRepository = require('../storage/userrepository');
const generateHash = require('../utilities/hash').generateHash;

const storage = UserRepository();
const router = express.Router();

router.post('/', (req, res) => {
  const newUser = Object.assign({}, req.body.user, {
    password: generateHash(req.body.user.password)
  });
  storage.create(newUser)
    .then(user => res.status(201).json({ user: { username: user.username } }))
    .catch(() => res.status(400).json({ error: 'Registration error' }));
});

module.exports = router;
