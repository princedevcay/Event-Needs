// Profile.jsx
import React from 'react';
import { connect } from 'react-redux';

const Profile = ({ userDetails }) => {
  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render user details */}
      <h2>{userDetails.name}</h2>
      {/* ... other user details ... */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.user.userDetails,
  };
};

export default connect(mapStateToProps)(Profile);
