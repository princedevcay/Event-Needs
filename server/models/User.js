/* eslint-disable no-useless-escape */
// models/User.js
/* eslint-disable no-undef */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true,  
  match: [/.+\@.+\..+/, 'Please use a valid email address'] },
  password: { type: String, required: [true, 'Password is required'], minlength: [6, 'Password must be at least 6 characters long']},
  username: String,
  bio: String,
  dateOfBirth: Date,
  gender: String,
  address: String,
  phoneNumber: String,
  isActive: { type: Boolean, default: true },
  isVerified: { type: Boolean, default: false },
  roles: [String],
  photo: String,
  language: String,
  notifications: Boolean,
  socialMedia: {
    twitter: String,
    facebook: String,
    linkedIn: String
    // Other social media fields
  },
  lastLogin: Date
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
