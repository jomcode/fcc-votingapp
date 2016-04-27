const mongoose = require('mongoose');

const pollSchema = mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  description: { type: String },
  choices: []
});

module.exports = mongoose.model('Poll', pollSchema);
