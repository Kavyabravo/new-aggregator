const users = [];

class UserRepository {
    getAllUsers() {
        return users;
    }

    findUserByEmail(email) {
        return users.find(user => user.email === email);
    }

    findUserById(id) {
        return users.find(user => user.id === id);
    }

    addUser(user) {
        user.id = users.length + 1;
        users.push(user);
        return user;
    }

    updateUserPreferences(email, preferences) {
        const user = this.findUserByEmail(email);
        if (user) {
            user.preferences = preferences;
            return user;
        }
        return null;
    }
}

module.exports = new UserRepository();
