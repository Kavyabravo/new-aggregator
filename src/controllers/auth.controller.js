// controllers/authController.js
const authService = require('../services/auth.service');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = await authService.signupUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const token = await authService.loginUser(req.body.email, req.body.password);
        res.status(200).json(token);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
