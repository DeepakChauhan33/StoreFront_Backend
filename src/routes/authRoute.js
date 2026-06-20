const express = require('express');
const router = express.Router();


// Importing Authentication Controllers
const { register } = require('../controllers/authController')

router.get('/sign-in', (req, res) => {
  // console.log("PORT from env:", process.env.PORT);
  res.render('signForm.ejs');
});