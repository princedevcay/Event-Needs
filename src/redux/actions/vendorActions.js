// redux/actions/vendorActions.js
import axios from 'axios';

export const FETCH_VENDOR_START = 'FETCH_VENDOR_START';
export const FETCH_VENDOR_SUCCESS = 'FETCH_VENDOR_SUCCESS';
export const FETCH_VENDOR_FAIL = 'FETCH_VENDOR_FAIL';
// Define other action types and creators (e.g., for updating vendor info, adding packages)

export const fetchVendor = (vendorId) => async (dispatch) => {
  dispatch({ type: FETCH_VENDOR_START });
  try {
    const response = await axios.get(`https://event-needs-backend.onrender.com/api/vendors/${vendorId}`);
    dispatch({ type: FETCH_VENDOR_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_VENDOR_FAIL, payload: error.message });
  }
};

// Add other action creators for updating vendor, adding/removing packages, etc.
