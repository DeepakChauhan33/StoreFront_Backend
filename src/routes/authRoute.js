const express = require('express');
const router = express.Router();


// Importing Authentication Controllers
const { register, getSignInForm, loginForm, login } = require('../controllers/authController');



router.get('/sign-in', getSignInForm);

router.post('/register', register);

router.get('/login', loginForm);

router.post('/login', login);

module.exports = router;