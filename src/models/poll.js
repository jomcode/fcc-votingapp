const mongoose = require('mongoose');

const pollSchema = mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  choices: [
    {
      description: { type: String, required: true },
      votes: { type: Number, default: 0 }
    }
  ],
  voterIps: [String]
});

module.exports = mongoose.model('Poll', pollSchema);
