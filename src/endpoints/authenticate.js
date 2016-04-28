const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const UserRepository = require('../storage/userrepository');
const isValidPassword = require('../utilities/hash').isValidPassword;
const tokenSecret = require('../config/tokensecret').tokenSecret;

const errMsg = 'Authentication error';
const storage = UserRepository();

router.post('/', (req, res) => {
  const pw = req.body.password;

  storage.getByUsername(req.body.username)
    .then(user => {
      if (!user || !isValidPassword(pw, user.password)) throw new Error(errMsg);

      const contents = Object.assign({}, { username: user.username, _id: user._id });
      const token = jwt.sign(contents, tokenSecret, { expiresIn: 10800 });
      res.status(200).json({ token: `JWT ${token}` });
    })
    .catch(err => res.status(400).json({ error: err.message }));
});

module.exports = router;
