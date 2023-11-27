/* eslint-disable no-undef */
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    street: {
      type: String,
      trim: true,
      default: ''
    },
    city: {
      type: String,
      trim: true,
      default: ''
    },
    state: {
      type: String,
      trim: true,
      default: ''
    },
    country: {
      type: String,
      trim: true,
      default: ''
    },
    postalCode: {
      type: String,
      trim: true,
      default: ''
    }
  },

  // Phone number field
  phoneNumber: {
    type: String,
    trim: true,
    default: ''
  },
  // Add any additional fields you might need
  // For example, you might want fields for user roles, profile pictures, etc.
});

module.exports = mongoose.model('User', userSchema);
