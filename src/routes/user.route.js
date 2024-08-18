const express = require('express');
const userController = require('../controllers/user.controller');
const { authenticateUser } = require('../middlewares/auth.middleware');
const { validatePreferences } = require('../middlewares/validation.middleware');

const router = express.Router();

router.get('/preferences', authenticateUser, userController.getPreferences);
router.put('/preferences', authenticateUser, validatePreferences, userController.updatePreferences);

module.exports = router;
