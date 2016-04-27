const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models/user');
const tokenSecret = require('./tokensecret').tokenSecret;

module.exports = (passport) => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeader(),
    secretOrKey: tokenSecret
  };

  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    console.log('payload->', jwtPayload);
    User.findOne({ _id: jwtPayload._id }, (err, user) => {
      if (err) return done(err, false);
      if (user) return done(null, user);
      return done(null, false);
    });
  }));
};
