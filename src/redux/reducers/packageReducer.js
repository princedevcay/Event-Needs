// redux/reducers/packageReducer.js

import {
    FETCH_PACKAGES_START,
    FETCH_PACKAGES_SUCCESS,
    FETCH_PACKAGES_FAIL
  } from '../actions/packageActions';
  
  const initialState = {
    packages: [],
    loading: false,
    error: null
  };
  
  const packageReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_PACKAGES_START:
        return { ...state, loading: true, error: null };
      case FETCH_PACKAGES_SUCCESS:
        return { ...state, loading: false, packages: action.payload };
      case FETCH_PACKAGES_FAIL:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default packageReducer;
  