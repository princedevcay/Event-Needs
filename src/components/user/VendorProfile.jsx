// components/VendorProfile.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchVendor } from '../../redux/actions/vendorActions';
// Import other components like ServicePackageForm

const VendorProfile = ({ match }) => {
  const dispatch = useDispatch();
  const { vendor, loading, error } = useSelector((state) => state.vendor);

  useEffect(() => {
    dispatch(fetchVendor(match.params.vendorId));
  }, [dispatch, match.params.vendorId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{vendor.vendorName}</h1>
      {/* Display other vendor details */}
      {/* Include forms or components for editing vendor details or managing packages */}
    </div>
  );
};

export default VendorProfile;
