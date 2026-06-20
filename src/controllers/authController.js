
const express = require('express');

const app = express();

// Importing Bcrypt and Json web token
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();


const userModel = require('../src/models/user.js');



// New user Registration 
const register = async (req, res) => {

  const { name, email, password } = req.body;

  const hashPassword = await bcrypt.hash(password, 10);

  let newUser = await userModel.create({
    name,
    email,
    password: hashPassword
  });

  res.send(newUser);

}


module.exports = register;
