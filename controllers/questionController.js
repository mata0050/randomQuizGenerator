const asyncHandler = require('express-async-handler');

// connect DB
const pool = require('../config/db');

// @route    GET /questions
// @desc     GET questions
// @access   Private
const getQuestions = asyncHandler(async (req, res) => {
  const { language, limit } = req.params;

  console.log(language);

  // Get all questions for this language
  const { rows } = await pool.query(
    'SELECT * FROM questions WHERE language = $1 ORDER BY RANDOM () LIMIT $2',
    [language, limit]
  );

  res.json(rows);
});

module.exports = {
  getQuestions,
};
