const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware');
const { addQuiz } = require('../../controllers/quizController');

// Connect to DB
const pool = require('../../config/db');

// Routes
router.post('/', addQuiz);

module.exports = router;
