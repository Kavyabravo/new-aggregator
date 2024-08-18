const express = require('express');
const newsController = require('../controllers/news.controller');
const { authenticateUser } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/news', authenticateUser, newsController.fetchNews);

module.exports = router;
