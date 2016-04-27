const mongoose = require('mongoose');
const express = require('express');

const mongoConfig = require('./config/mongo').mongoConfig;

const app = express();

module.exports.server = app;
