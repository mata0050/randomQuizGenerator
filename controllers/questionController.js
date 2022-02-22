const asyncHandler = require('express-async-handler');
const request = require('request');
const dotenv = require('dotenv');

dotenv.config();

// connect DB
const pool = require('../config/db');

// @route    GET /questions
// @desc     GET questions
// @access   Private
const getQuestions = asyncHandler(async (req, res) => {
  const { language, limit } = req.params;

  if (language === 'Python' || language === 'Java' || language === 'C++') {
    // Get all questions for this language
    const { rows } = await pool.query(
      'SELECT * FROM questions WHERE language = $1 ORDER BY RANDOM () LIMIT $2',
      [language, limit]
    );

    return res.json(rows);
  } else {
    request(
      `https://quizapi.io/api/v1/questions?apiKey=${process.env.apiKey}&category=${language}&limit=${limit}`,
      function (error, response, body) {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

        const questions = JSON.parse(body);
        const newQuestions = [];

        questions.forEach((element) => {
          newQuestions.push({
            id: element.id,
            question: element.question,
            answer_a: element.answers.answer_a,
            answer_b: element.answers.answer_b,
            answer_c: element.answers.answer_c,
            answer_d: element.answers.answer_d,
            correct_answer: element.correct_answer,
            language,
          });
        });
        return res.json(newQuestions);
      }
    );
  }
});

module.exports = {
  getQuestions,
};
