if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const mongoConfig = {
  url: process.env.MONGO_URL
};

module.exports.mongoConfig = mongoConfig;
