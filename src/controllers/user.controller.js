const userService = require('../services/user.service');

const getPreferences = (req, res) => {
    try {
        const preferences = userService.getUserPreferences(req.user.email);
        res.status(200).json({ preferences });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updatePreferences = (req, res) => {
    try {
        userService.updateUserPreferences(req.user.email, req.body.preferences);
        res.status(200).json({ message: 'Preferences updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getPreferences, updatePreferences };
