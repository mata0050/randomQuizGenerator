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
    'SELECT user_id ,SUM(total_questions) as total_questions, AVG(score) as average_score FROM quiz JOIN users ON user_id = users.id GROUP BY user_id ORDER BY average_score DESC'
  );
  res.json(rows);
});

// @route    GET /api/quiz/:user_id
// @desc     GET quiz
// @access   Private
const getUserQuizResults = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  // add quiz
  const { rows } = await pool.query(
    'SELECT * FROM quiz WHERE user_id = $1 ORDER BY id DESC',
    [user_id]
  );

  res.json(rows);
});

// @route    GET /api/quiz/:user_id
// @desc     GET quiz
// @access   Private
const getUserQuizResultsGraph = asyncHandler(async (req, res) => {
  const { user_id } = req.params;

  // add quiz
  const { rows } = await pool.query(
    'SELECT * FROM quiz WHERE user_id = $1 ORDER BY id DESC',
    [user_id]
  );

  const labels = ['Code', 'Python'];
  const graph = [  {
    "Java": {
        "score": []
    }
}];

  rows.forEach((element) => {
    if (!graph.includes({[element.name]:{ score: [] } })) {
      graph.push({[element.name]: { score: [] }});
    } else {
      console.log(graph[graph.indexOf(element.name)]);
    }
    // if (!labels.includes(element.name)) {
    //   labels.push(element.name);
    // }
  });

  // const graph = [];

  // rows.forEach((element) => {
  //   if (labels.includes(element.name)) {
  //     labels.push({
  //       label: element.name,
  //       score: [Math.round((element.score / element.total_questions) * 100)],
  //     });
  //     console.log(labels.indexOf(element.name));
  //   } else {
  //     console.log(element.name)
  // labels[element.name].push([
  //   ...labels,
  //   {
  //     label: element.name,
  //     score: [
  //       ...labels[element.name].score,
  //       element.name
  //       // Math.round((element.score / element.total_questions) * 100),
  //     ],
  //   },
  // ]);
  //     console.log('sss')
  //   }
  // });

  res.json(graph);
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
  getUserQuizResultsGraph,
  getAllUsers,
};
