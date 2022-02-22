const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware');
const { getQuestions } = require('../../controllers/questionController');


// Routes
router.get('/:language/:limit',  getQuestions);

module.exports = router;

