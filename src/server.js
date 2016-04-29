const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const path = require('path');

const registerRouter = require('./server/endpoints/register');
const authenticateRouter = require('./server/endpoints/authenticate');
const pollsRouter = require('./server/endpoints/polls');

require('./server/config/passport')(passport);

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

if (process.env.NODE_ENV === 'production') app.use(morgan('combined'));
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/api/v1/register', registerRouter);
app.use('/api/v1/authenticate', authenticateRouter);
app.use('/api/v1/polls', pollsRouter);

module.exports.server = app;
