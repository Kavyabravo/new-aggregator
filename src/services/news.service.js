const userService = require('../services/user.service');

const fetchNewsFromAPI = async (email) => {
    const preferences = userService.getUserPreferences(email);
    // TODO: Use a real external API or mock data for fetching news
    return preferences.map(pref => ({ source: pref, articles: [] })); // Mock implementation
};

module.exports = { getNews: fetchNewsFromAPI };
