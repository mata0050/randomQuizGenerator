const asyncHandler = require('express-async-handler');
const request = require('request');
// connect DB
const pool = require('../config/db');

// @route    GET /api/youtube/:query
// @desc     Search youtube
// @access   Private
const youtubeSearch = asyncHandler(async (req, res) => {
  const { query } = req.params;
  request(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.youtubeAPI}`,
    function (error, response, body) {
      console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log(JSON.stringify(body));
      const data = JSON.parse(body);
      return res.json(data);
    }
  );
});

// @route    GET /api/youtube
// @desc     GET youtube video from db
// @access   Private
const getYoutubeVideos = asyncHandler(async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM youtube ORDER BY RANDOM ()');
  res.json(rows);
});

module.exports = {
  youtubeSearch,
  getYoutubeVideos,
};
