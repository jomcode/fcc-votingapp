const mongoose = require('mongoose');

const choiceSchema = mongoose.Schema({
  description: { type: String, required: true },
  votes: { type: Number, default: 0 }
});

const pollSchema = mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  choices: { type: [choiceSchema], required: true }
});

module.exports = mongoose.model('Poll', pollSchema);
