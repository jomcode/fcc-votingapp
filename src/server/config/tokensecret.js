if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const tokenSecret = process.env.TOKEN_SECRET;

module.exports.tokenSecret = tokenSecret;
