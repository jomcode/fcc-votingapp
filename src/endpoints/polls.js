const express = require('express');

const isAuthenticated = require('../middleware/isauthenticated');
const Poll = require('../models/poll');

const router = express.Router();

// get all polls
router.get('/', (req, res) => {});

// get specific poll
router.get('/:pollId', (req, res) => {});

// create poll
router.post('/', isAuthenticated, (req, res) => {});

// get all polls by user
router.get('/user/:userId', isAuthenticated, (req, res) => {});

// delete a poll
router.delete('/:pollId', isAuthenticated, (req, res) => {});

// vote in a poll
router.put('/vote/:pollId', (req, res) => {});

// add new choice to a poll
router.put('/edit/:pollId', (req, res) => {});

module.exports = router;
