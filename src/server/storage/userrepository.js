const User = require('../models/user');

function UserRepository() {
  this.model = User;
}

UserRepository.prototype.getByUsername = function getByUsername(username) {
  return this.model.findOne({ username }).exec();
};

UserRepository.prototype.getById = function getById(id) {
  return this.model.findById(id).exec();
};

UserRepository.prototype.create = function create(user) {
  const newUser = new User(user);
  return newUser.save();
};

module.exports = () => new UserRepository();
