const express = require('express');

const jsonError = require('../helpers/jsonerror').jsonError;
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
  newPoll.title = req.body.title;
  newPoll.subtitle = req.body.subtitle;
  newPoll.choices = req.body.choices.slice(0);

  newPoll.save((err, poll) => {
    if (err) return res.status(400).json({ error: err.message });
    return res.status(201).json(Object.assign({}, { poll }));
  });
});

// get all polls by user
router.get('/user/:userId', isAuthenticated, (req, res) => {
  const userId = req.params.userId;

  Poll.find({ ownerId: userId }, (err, polls) => {
    if (err) return res.json(400).json({ error: 'Error getting user polls' });
    return res.status(200).json(Object.assign({}, { polls }));
  });
});

// delete a poll
router.delete('/:pollId', isAuthenticated, (req, res) => {
  const pollId = req.params.pollId;

  Poll.findByIdAndRemove(pollId, (err, result) => {
    if (err) return res.status(400).json({ error: 'Error deleting poll' });
    if (result === null) return res.status(404).json({ error: 'Poll not found' });
    return res.status(204).json();
  });
});

// vote in a poll
router.put('/vote/:choiceId', (req, res) => {
  const choiceId = req.params.choiceId;

  /* eslint-disable consistent-return */
  Poll.findOne({ 'choices._id': choiceId }, (err, poll) => {
    if (err) return res.status(400).json({ error: err });

    const originalChoice = poll.choices.id(choiceId);
    originalChoice.votes = originalChoice.votes + 1;

    poll.save((e, updatedPoll) => {
      if (e) return res.status(400).json({ error: e });
      return res.status(201).json(updatedPoll);
    });
  });
  /* eslint-enable consistent-return */
});

// add new choice to a poll
router.put('/addchoice/:pollId', (req, res) => {
  const pollId = req.params.pollId;
  const newChoice = req.body.newChoice;

  /* eslint-disable consistent-return */
  Poll.findById(pollId, (err, poll) => {
    if (err) return res.status(400).json({ error: err });

    poll.choices.push(newChoice);

    poll.save((e, updatedPoll) => {
      if (e) return jsonError(400, e, res);
      return res.status(201).json(updatedPoll);
    });
  });
  /* eslint-enable consistent-return */
});

module.exports = router;
