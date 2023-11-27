/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = require('./app'); // Import app.js


// Connect to MongoDB
const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("Error: The MONGODB_URI environment variable is not set.");
  process.exit(1); // Exit the application with an error code
}
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    // You can start handling your database operations here
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
  }
}

run();

// Set up CORS
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
