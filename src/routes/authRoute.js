const express = require('express');
const router = express.Router();


// Importing Authentication Controllers
const { register, getSignInForm, loginForm, checkLogin } = require('../controllers/authController');


router.get('/sign-in', getSignInForm);

router.post('/register', register);

router.get('/login', loginForm);

router.post('/login', checkLogin);

module.exports = router;