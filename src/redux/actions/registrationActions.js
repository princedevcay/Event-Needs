// redux/actions/registrationActions.js

export const SET_PACKAGE_SELECTION = 'SET_PACKAGE_SELECTION';
export const SET_VENDOR_DETAILS = 'SET_VENDOR_DETAILS';
export const SET_PAYMENT_DETAILS = 'SET_PAYMENT_DETAILS';
export const RESET_REGISTRATION = 'RESET_REGISTRATION';

export const setPackageSelection = (packageId) => ({
  type: SET_PACKAGE_SELECTION,
  payload: packageId
});

export const setVendorDetails = (details) => ({
  type: SET_VENDOR_DETAILS,
  payload: details
});

export const setPaymentDetails = (details) => ({
  type: SET_PAYMENT_DETAILS,
  payload: details
});

export const resetRegistration = () => ({
  type: RESET_REGISTRATION
});
