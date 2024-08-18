const newsService = require('../services/news.service');

const fetchNews = async (req, res) => {
    try {
        const news = await newsService.getNews(req.user.email);
        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { fetchNews };
