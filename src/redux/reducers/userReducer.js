// Import the action type constants from the types file
import { SET_USER, CLEAR_USER } from '../types';

const initialState = {
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    case CLEAR_USER:
      return {
        ...state,
        userDetails: null,
      };
    default:
      return state;
  }
};

export default userReducer;
