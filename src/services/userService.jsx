/* eslint-disable no-undef */
// src/services/userService.js
import axios from 'axios';
const API_URL = 'https://event-needs-backend.onrender.com/api/users'; // Update with your actual backend URL

 // Update with your actual backend URL

 export const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error creating user:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error.response ? error.response.data : error.message);
    throw error;
  }
};