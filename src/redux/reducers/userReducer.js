// userReducer.js
const initialState = {
    userDetails: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          userDetails: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  