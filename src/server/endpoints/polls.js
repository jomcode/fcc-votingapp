const express = require('express');

const isAuthenticated = require('../middleware/isauthenticated');
const PollRepository = require('../storage/pollrepository');

const router = express.Router();
const storage = new PollRepository();

// get all polls
router.get('/', (req, res) => storage
  .getAll()
    .then(polls => res.status(200).json({ polls }))
    .catch(err => res.status(400).json({ error: err })));

// get specific poll
router.get('/:pollId', (req, res) => storage
  .getById(req.params.pollId)
    .then(poll => res.status(200).json({ poll }))
    .catch(err => res.status(400).json({ error: err })));

// create poll
router.post('/', isAuthenticated, (req, res) => {
  const newPoll = Object.assign({}, req.body.poll, { ownerId: req.user._id });
  storage.create(newPoll)
    .then(poll => res.status(201).json({ poll }))
    .catch(err => res.status(400).json({ error: err }));
});

// get all polls by user
router.get('/user/:userId', isAuthenticated, (req, res) => storage
  .getByUserId(req.params.userId)
    .then(polls => res.status(200).json({ polls }))
    .catch(err => res.status(400).json({ error: err })));

// delete a poll
router.delete('/:pollId', isAuthenticated, (req, res) => {
  storage.deleteByPollId(req.params.pollId)
    .then(() => res.status(204).json())
    .catch(err => res.status(400).json({ error: err }));
});

// vote in a poll
router.put('/vote/:choiceId', (req, res) => storage
  .voteByChoiceId(req.params.choiceId)
    .then(updatedPoll => res.status(201).json({ updatedPoll }))
    .catch(err => res.status(400).json({ error: err })));

// add new choices to a poll
router.put('/addchoices/:pollId', isAuthenticated, (req, res) => {
  if (req.user._id.toString() !== req.body.userId.toString()) {
    return res.status(400).json({ error: 'Invalid Request' });
  }

  return storage.addChoice(req.params.pollId, req.body.newChoices)
    .then(updatedPoll => res.status(201).json({ updatedPoll }))
    .catch(err => res.status(400).json({ error: err }));
});

module.exports = router;
