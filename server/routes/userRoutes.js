/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/userController');
const User = require('../models/User');



router.post('/users', 
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  userController.createUser
);
router.get('/users', userController.getUsers);

router.get('/profile', protect, userController.getUserProfile);

router.get('/user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).select('-password'); // Exclude password from the result

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Registration route
router.post('/register', [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Invalid email address'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  // other validations as needed...
], (req, res, next) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Return a response with error details
    return res.status(400).json({ errors: errors.array() });
  }
  // If no errors, proceed to the controller
  userController.register(req, res, next);
});

// Login route
router.post('/login', 
  [
    body('email').isEmail().normalizeEmail(),
    body('password').exists(),
  ],
  userController.login
);


module.exports = router;
