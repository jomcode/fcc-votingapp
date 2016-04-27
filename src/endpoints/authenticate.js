const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require('../models/user');
const tokenSecret = require('../config/tokensecret').tokenSecret;

const errMsg = { error: 'Authentication error' };

router.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) return res.json({ error: err });
    if (!user) return res.status(401).json(errMsg);
    if (!user.validPassword(req.body.password)) return res.status(401).json(errMsg);

    const tu = Object.assign({}, { username: user.username, _id: user._id });
    const token = jwt.sign(tu, tokenSecret, { expiresIn: 10800 });
    return res.status(200).json({ token: `JWT ${token}` });
  });
});

module.exports = router;
