const bcrypt = require('bcryptjs');

const generateHash = (pw) => bcrypt.hashSync(pw, bcrypt.genSaltSync(8), null);

module.exports.generateHash = generateHash;

const isValidPassword = (pw, hashed) => bcrypt.compareSync(pw, hashed);

module.exports.isValidPassword = isValidPassword;
