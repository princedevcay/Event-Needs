// redux/reducers/vendorReducer.js
import {
  FETCH_VENDOR_START,
  FETCH_VENDOR_SUCCESS,
  FETCH_VENDOR_FAIL
  // Import other action types
} from '../actions/vendorActions';

const initialState = {
  vendor: null,
  loading: false,
  error: null
  // Other initial states as needed
};

const vendorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VENDOR_START:
      return { ...state, loading: true, error: null };
    case FETCH_VENDOR_SUCCESS:
      return { ...state, loading: false, vendor: action.payload };
    case FETCH_VENDOR_FAIL:
      return { ...state, loading: false, error: action.payload };
    // Handle other actions
    default:
      return state;
  }
};

export default vendorReducer;
