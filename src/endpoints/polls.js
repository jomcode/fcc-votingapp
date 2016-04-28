const express = require('express');

const isAuthenticated = require('../middleware/isauthenticated');
const Poll = require('../models/poll');

const router = express.Router();

// get all polls
router.get('/', (req, res) => {
  Poll.find({}, (err, polls) => {
    if (err) return res.status(400).json({ error: 'Error getting polls' });
    return res.status(200).json(Object.assign({}, { polls }));
  });
});

// get specific poll
router.get('/:pollId', (req, res) => {
  const pollId = req.params.pollId;

  Poll.findById(pollId, (err, poll) => {
    if (err) return res.json(400).json({ error: 'Error getting poll' });
    return res.status(200).json(Object.assign({}, { poll }));
  });
});

// create poll
router.post('/', isAuthenticated, (req, res) => {
  const newPoll = new Poll();
  newPoll.ownerId = req.user._id;
  newPoll.name = req.body.name;
  newPoll.description = req.body.description || '';
  newPoll.choices = req.body.choices.slice(0);

  newPoll.save((err, poll) => {
    if (err) return res.status(400).json({ error: 'Error saving poll' });
    return res.status(201).json(Object.assign({}, { poll }));
  });
});

// get all polls by user
router.get('/user/:userId', isAuthenticated, (req, res) => {});

// delete a poll
router.delete('/:pollId', isAuthenticated, (req, res) => {});

// vote in a poll
router.put('/vote/:pollId', (req, res) => {});

// add new choice to a poll
router.put('/edit/:pollId', (req, res) => {});

module.exports = router;
