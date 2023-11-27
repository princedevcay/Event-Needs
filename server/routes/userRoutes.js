/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, protect } = require('../controllers/authController');



// Comment out all routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);


module.exports = router;
