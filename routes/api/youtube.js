const express = require('express');
const router = express.Router();
const request = require('request');
const { youtubeSearch , getYoutubeVideos} = require('../../controllers/youtubeController');

// Routes
router.get('/', getYoutubeVideos);
router.get('/:query', youtubeSearch);

module.exports = router;
