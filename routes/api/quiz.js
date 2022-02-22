const express = require('express');
const router = express.Router();
const auth = require('../../middleware/authMiddleware');
const { addQuiz, getUserQuizResults,getAllUserQuizResults, getAllUsers } = require('../../controllers/quizController');

// Routes
router.post('/', addQuiz);
router.get('/users', getAllUsers);
router.get('/', getAllUserQuizResults);
router.get('/:user_id', getUserQuizResults);

module.exports = router;
