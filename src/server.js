const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const mongoConfig = require('./config/mongo').mongoConfig;

mongoose.connect(mongoConfig.url, err => {
  if (err) console.error(`${err.name}: ${err.message}`);
});

const app = express();

app.use(bodyParser.json({ extended: true }));

module.exports.server = app;
