const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const userStorage = require('./storage/userrepository')();

const registerHandlers = require('./handlers/register');
const registerRouter = require('./endpoints/register')(userStorage, registerHandlers);

const authenticateRouter = require('./endpoints/authenticate');
const pollsRouter = require('./endpoints/polls');

const mongoConfig = require('./config/mongo').mongoConfig;

const connectMongoose = () => {
  mongoose.connect(mongoConfig.url, err => {
    if (err) return console.error(`${err.name}: ${err.message}`);
    return console.log('mongoose connected');
  });
};

module.exports.connectMongoose = connectMongoose;

require('./config/passport')(passport);

const app = express();

const loggerConfig = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(loggerConfig));

app.use(bodyParser.json());

app.use('/api/register', registerRouter);
app.use('/api/authenticate', authenticateRouter);
app.use('/api/polls', pollsRouter);

module.exports.server = app;
