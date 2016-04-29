const generateHash = require('../utilities/hash').generateHash;

const registerUser = (req, res, storage) => {
  const newUser = Object.assign({}, req.body.user, {
    password: generateHash(req.body.user.password)
  });
  storage.create(newUser)
    .then(user => res.status(201).json({ user: { username: user.username } }))
    .catch(() => res.status(400).json({ error: 'Registration error' }));
};

const handlers = {
  '/': {
    post: registerUser
  }
};

module.exports = handlers;
