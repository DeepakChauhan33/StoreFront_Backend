const express = require('express');
require('dotenv').config();



// Comment
const connectDB = require('../config/db');



connectDB();



// Creating Express app
const app = express();

const cors = require("cors");

app.use(cors());


const cookieParser = require("cookie-parser");




app.use(cookieParser());



// Middleware to parse incoming JSON and form data  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// IMporting bcrypt
const bcrypt = require('bcryptjs');

// Importing josn web token
const jwt = require('jsonwebtoken');



// Middlewares 

const authMiddleware  = require('../src/middleware/authMiddleware.js');



// EJS 
app.set('view engine', 'ejs');

// User Data
const User = require('../src/models/user.js');



//User Route
const authRoutes = require('./routes/authRoute.js');

// Product Routes
const productRoutes = require('./routes/productRoutes.js');

// Order ROutes
const orderRoutes = require('./routes/orderRoute.js');










app.get('/', (req, res) => {
  res.send("Welcome to the server");
})


// Using Route mini app
app.use('/user', authRoutes);


app.use('/product', productRoutes);


app.use('/order', authMiddleware, orderRoutes);







// Comment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}/`);
});