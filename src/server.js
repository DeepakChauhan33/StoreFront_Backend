const express = require('express');
require('dotenv').config();



// Comment
const connectDB = require('../config/db');



connectDB();



// Creating Express app
const app = express();

const cors = require("cors");

app.use(cors());



// Middleware to parse incoming JSON and form data  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// IMporting bcrypt
const bcrypt = require('bcryptjs');

// Importing josn web token
const jwt = require('jsonwebtoken');



// EJS 
app.set('view engine', 'ejs');

// User Data
const User = require('../src/models/user.js');



//User Route
const authRoutes = require('./routes/authRoute.js');

// Product Routes
const productRoutes = require('./routes/productRoutes.js');










app.get('/', (req, res) => {
  res.send("Welcome to the server");
})


// Using Route mini app
app.use('/user', authRoutes);


app.use('/product', productRoutes)






// sign url
// app.get('/sign-in', (req, res) => {
//   console.log("PORT from env:", process.env.PORT);
//   res.render('signForm.ejs');
// });


// create url
// app.post('/create', async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashPassword = await bcrypt.hash(password, 10); // Hashing Password

//   let createdUser = await User.create({
//     name, email, password: hashPassword
//   })

//   res.send(createdUser);
// })



// Login Url

// app.get('/login', (req, res) => {

//   res.render('loginForm.ejs');

// });

// // Login 
// app.post('/login', async (req, res) => {

//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (!user) {
//     return res.status(400).json({
//       message: "User not found"
//     });
//   }


//   const isMatch = await bcrypt.compare(
//     password,
//     user.password
//   );


//   if (!isMatch) {
//     return res.status(400).json({
//       message: "Invalid Password"
//     })
//   }


//   const token = jwt.sign(

//     {
//       userId: user._id
//     },

//     process.env.JWT_SECRET,



//     {
//       expiresIn: "7d"
//     }
//   )

//   res.json({
//     token
//   });



// })






// Comment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}/`);
});