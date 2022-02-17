const asyncHandler = require('express-async-handler');

// connect DB
const pool = require('../config/db');

// @route    GET /api/quiz/
// @desc     GET quiz
// @access   Private
const getAllUsers = asyncHandler(async (req, res) => {
  const { rows } = await pool.query(
    'SELECT id, first_name, last_name, avatar FROM users'
  );
  res.json(rows);
});

// @route    GET /api/quiz/
// @desc     GET quiz
// @access   Private
const getAllUserQuizResults = asyncHandler(async (req, res) => {
  const { rows } = await pool.query(
    'SELECT user_id ,SUM(total_questions) as total_questions, AVG(score) as average_score FROM quiz JOIN users ON user_id = users.id GROUP BY user_id'
  );
  res.json(rows);
});

// @route    GET /api/quiz/:user_id
// @desc     GET quiz
// @access   Private
const getUserQuizResults = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  // add quiz
  const { rows } = await pool.query('SELECT * FROM quiz WHERE user_id = $1', [
    user_id,
  ]);

  res.json(rows);
});

// @route    POST /api/quiz
// @desc     POST quiz
// @access   Private
const addQuiz = asyncHandler(async (req, res) => {
  const { score, name, user_id, total_questions } = req.body;

  // add quiz
  const { rows } = await pool.query(
    'INSERT INTO quiz( score, name, user_id, total_questions) VALUES( $1, $2, $3, $4) RETURNING *',
    [score, name, user_id, total_questions]
  );

  res.json(rows);
});

module.exports = {
  addQuiz,
  getUserQuizResults,
  getAllUserQuizResults,
  getAllUsers,
};
