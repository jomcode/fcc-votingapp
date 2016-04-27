const express = require('express');

const isAuthenticated = require('../middleware/isauthenticated').isAuthenticated;

const router = express.Router();

router.get('/', isAuthenticated, (req, res) => {
  res.json({});
});

module.exports = router;
