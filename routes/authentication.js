const express = require('express');
const { login, register } = require('../controllers/authController');
const { validateUser, validateLogin } = require('../middleware/validateUser');
const router = express.Router();

// Login route
router.post('/login', validateLogin, login);
router.post('/register', validateUser, register);

module.exports = router;