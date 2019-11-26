const mongoose = require('mongoose'); // Require mongoose to create model schema
const { Schema, model } = mongoose;   // Destructure Schema and model from mongoose

// User Schema declaration
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: "ESte Usuario no esta disponible"
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    lastNames: {
      type: String,
      required: true
    },
    roles: {
      type:String,
      required: true,
    },
    
    birthdate: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = model('User', userSchema); // Export User Schema as User Model