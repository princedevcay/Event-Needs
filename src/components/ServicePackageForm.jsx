// components/ServicePackageForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ServicePackageForm = ({ vendorId, onPackageAdded }) => {
  const [servicePackage, setServicePackage] = useState({
    title: '',
    description: '',
    price: 0,
    // ... other fields ...
  });

  const handleChange = (e) => {
    setServicePackage({ ...servicePackage, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/vendors/${vendorId}/service-packages`, servicePackage);
      onPackageAdded(response.data); // Update the parent component
    } catch (error) {
      console.error('Error adding service package', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="title" 
        value={servicePackage.title} 
        onChange={handleChange}
        placeholder="Package Title"
      />
      {/* Add other fields like description, price, etc. */}
      <button type="submit">Add Package</button>
    </form>
  );
};

export default ServicePackageForm;
