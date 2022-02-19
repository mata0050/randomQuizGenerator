const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware');
const { getQuestions } = require('../../controllers/questionController');

// Connect to DB
const pool = require('../../config/db');

// Routes
router.get('/:language/:limit',  getQuestions);

module.exports = router;

