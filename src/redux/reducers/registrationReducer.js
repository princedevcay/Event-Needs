// redux/reducers/registrationReducer.js

import {
    SET_PACKAGE_SELECTION,
    SET_VENDOR_DETAILS,
    SET_PAYMENT_DETAILS,
    RESET_REGISTRATION
  } from '../actions/registrationActions';
  
  const initialState = {
    selectedPackageId: null,
    vendorDetails: {},
    paymentDetails: {}
  };
  
  const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PACKAGE_SELECTION:
        return { ...state, selectedPackageId: action.payload };
      case SET_VENDOR_DETAILS:
        return { ...state, vendorDetails: action.payload };
      case SET_PAYMENT_DETAILS:
        return { ...state, paymentDetails: action.payload };
      case RESET_REGISTRATION:
        return initialState;
      default:
        return state;
    }
  };
  
  export default registrationReducer;
  