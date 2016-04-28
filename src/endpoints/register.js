const express = require('express');

module.exports = (storage, handlers) => {
  const router = express.Router();

  router.post('/', (req, res) => handlers['/'].post(req, res, storage));

  return router;
};
