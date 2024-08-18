// services/authService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/user.repository');

class AuthService {
    async signupUser(userData) {
        const { name, email, password, preferences } = userData;
        const existingUser = userRepository.findUserByEmail(email);

        if (existingUser) {
            throw new Error('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            name,
            email,
            password: hashedPassword,
            preferences: preferences || [],
        };

        return userRepository.addUser(newUser);
    }

    async loginUser(email, password) {
        const user = userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error('Incorrect password');
        }

        const token = jwt.sign({ email: user.email, id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token };
    }
}

module.exports = new AuthService();
