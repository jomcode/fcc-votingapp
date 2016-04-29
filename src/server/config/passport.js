const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const UserRepository = require('../storage/userrepository')();
const tokenSecret = require('./tokensecret').tokenSecret;

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: tokenSecret
  };

  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    UserRepository.getById(jwtPayload._id)
      .then(user => {
        if (user) return done(null, user);
        return done(null, false);
      })
      .catch(err => done(err, false));
  }));
};
