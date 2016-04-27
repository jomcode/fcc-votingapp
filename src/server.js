const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const registerRouter = require('./endpoints/register');
const authenticateRouter = require('./endpoints/authenticate');
const usersRouter = require('./endpoints/users');

const mongoConfig = require('./config/mongo').mongoConfig;

mongoose.connect(mongoConfig.url, err => {
  if (err) console.error(`${err.name}: ${err.message}`);
});

require('./config/passport')(passport);

const app = express();

const loggerConfig = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';
app.use(morgan(loggerConfig));

app.use(bodyParser.json());

app.use('/api/register', registerRouter);
app.use('/api/authenticate', authenticateRouter);
app.use('/api/users', usersRouter);

module.exports.server = app;
