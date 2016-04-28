const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, lowercase: true, unique: true, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
