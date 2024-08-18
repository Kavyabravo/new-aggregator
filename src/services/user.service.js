// services/userService.js
const userRepository = require('../repositories/user.repository');

class UserService {
    getUserPreferences(email) {
        const user = userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }
        return user.preferences;
    }

    updateUserPreferences(email, preferences) {
        return userRepository.updateUserPreferences(email, preferences);
    }
}

module.exports = new UserService();
