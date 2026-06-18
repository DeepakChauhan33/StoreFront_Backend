const express = require('express');

// Comment
const connectDB = require('../config/db');

const userModel = require('../src/models/user.js');


require('dotenv').config();

connectDB();

const app = express();


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

  let createdUser = await userModel.create({
    name, email, password
  })

  res.send(createdUser);
})



// Login Url

app.get('/login', (req, res) => {

  res.render('loginForm.ejs');

});


app.post('/login', async (req, res) => {

  try {
    let user = await userModel.findOne({ email: req.body.email });
    console.log(user);

  } catch (error) {
    res.send("Not found");
  }
})


app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}/`);
});