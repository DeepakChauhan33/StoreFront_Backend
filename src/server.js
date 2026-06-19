const express = require('express');

// Comment
const connectDB = require('../config/db');

const userModel = require('../src/models/user.js');


require('dotenv').config();

connectDB();

const app = express();

// IMporting bcrypt
const bcrypt = require('bcryptjs');

// IMporting josn web token
const jwt = require('jsonwebtoken');


// Middleware to parse incoming JSON and form data  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// IMPORTANT TO ADD IN NOTES 




// EJS 
app.set('view engine', 'ejs');

// Comment
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send("Welcome to the server");
})


// sign url
app.get('/sign-in', (req, res) => {
  console.log("PORT from env:", process.env.PORT);
  res.render('signForm.ejs');
});


// create url
app.post('/create', async (req, res) => {
  const { name, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10); // Hashing Password

  let createdUser = await userModel.create({
    name, email, password: hashPassword
  })

  res.send(createdUser);
})



// Login Url

app.get('/login', (req, res) => {

  res.render('loginForm.ejs');

});

// Login 
app.post('/login', async (req, res) => {

  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "User not found"
    });
  }


  const isMatch = await bcrypt.compare(
    password,
    user.password
  );


  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid Password"
    })
  }

  res.json({
    message: "Login Success"
  })



})








app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}/`);
});