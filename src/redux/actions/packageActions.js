// redux/actions/packageActions.js
import axios from 'axios';

export const FETCH_PACKAGES_START = 'FETCH_PACKAGES_START';
export const FETCH_PACKAGES_SUCCESS = 'FETCH_PACKAGES_SUCCESS';
export const FETCH_PACKAGES_FAIL = 'FETCH_PACKAGES_FAIL';

export const fetchPackages = () => async (dispatch) => {
  dispatch({ type: FETCH_PACKAGES_START });
  try {
    const response = await axios.get('https://event-needs-backend.onrender.com/api/vendor-packages');
    dispatch({ type: FETCH_PACKAGES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PACKAGES_FAIL, payload: error.message });
  }
};
