const Poll = require('../models/poll');

function PollRepository() {
  this.model = Poll;
}

PollRepository.prototype.getAll = function getAll() {
  return this.model.find().exec();
};

PollRepository.prototype.getById = function getById(id) {
  return this.model.findById(id).exec();
};

PollRepository.prototype.create = function create(poll) {
  const newPoll = new Poll(poll);
  return newPoll.save();
};

PollRepository.prototype.getByUserId = function getByUserId(id) {
  return this.model.find({ ownerId: id }).exec();
};

PollRepository.prototype.deleteByPollId = function deleteByPollId(id) {
  return this.model.findByIdAndRemove(id).exec();
};

PollRepository.prototype.voteByChoiceId = function voteByChoiceId(id) {
  return this.model.findOne({ 'choices._id': id }).exec()
    .then(poll => {
      const originalChoice = poll.choices.id(id);
      originalChoice.votes = originalChoice.votes + 1;
      return poll.save();
    });
};

PollRepository.prototype.addChoice = function addChoice(pollId, choice) {
  return this.model.findById(pollId).exec()
    .then(poll => {
      poll.choices.push(choice);
      return poll.save();
    });
};

module.exports = PollRepository;
