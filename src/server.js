const express = require('express');

// Comment
const connectDB = require('../config/db');


require('dotenv').config();

connectDB();

const app = express();

// Comment
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log("PORT from env:", process.env.PORT);
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${process.env.PORT}/`);
});