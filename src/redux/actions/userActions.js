// Import the action type constants from the types file
import { SET_USER, CLEAR_USER } from '../types';

// Action Creators
export const setUser = (userData) => ({
  type: SET_USER,
  payload: userData,
});

export const clearUser = () => ({
  type: CLEAR_USER,
});
