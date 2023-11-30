/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


const app = express();


// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
  

// Middleware
app.use(cors());
// JSON parsers
app.use(express.json());
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});




// Routes
app.use('/api', userRoutes);

module.exports = app;
