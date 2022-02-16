const asyncHandler = require('express-async-handler');

// connect DB
const pool = require('../config/db');

// @route    POST /api/quiz
// @desc     POST quiz
// @access   Private
const addQuiz = asyncHandler(async (req, res) => {
  const { score, name, user_id } = req.body;

  // add quiz
  const { rows } = await pool.query(
    'INSERT INTO quiz( score, name, user_id) VALUES( $1, $2, $3) RETURNING *',
    [score, name, user_id]
  );

  res.json(rows);
});

module.exports = {
  addQuiz,
};
