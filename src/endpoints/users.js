const express = require('express');

const isAuthenticated = require('../middleware/isauthenticated');

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
