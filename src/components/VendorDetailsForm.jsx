import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  VStack,
  Alert,
  AlertIcon,
  Checkbox,
} from '@chakra-ui/react';

const VendorDetailsForm = ({ onDataUpdate, onContinue }) => {
  const [vendorDetails, setVendorDetails] = useState({
    vendorName: '',
    category: '',
    description: '',
    servicesOffered: [],
    website: '',
    contactPerson: {
      name: '',
      email: '',
      phone: '',
      password: '', // Include the password field
    },
    yearsOfExperience: '',
    businessDocuments: [],
    servicePackages: [],
    location: '',
    socialMediaLinks: {
      facebook: '',
      twitter: '',
      instagram: '',
    },
  });

  const [formErrors, setFormErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const validateForm = () => {
    const errors = {};
    if (!vendorDetails.contactPerson.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (vendorDetails.contactPerson.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long.';
    }
    // Add other validation rules as needed
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVendorDetails({
      ...vendorDetails,
      contactPerson: {
        ...vendorDetails.contactPerson,
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onDataUpdate(vendorDetails);
      onContinue();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <VStack spacing={4} align="left" width="100%" maxW="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="vendorName" isRequired>
          <FormLabel>Vendor Name</FormLabel>
          <Input
            type="text"
            name="vendorName"
            value={vendorDetails.vendorName}
            onChange={(e) => setVendorDetails({ ...vendorDetails, vendorName: e.target.value })}
          />
        </FormControl>

        <FormControl id="category" isRequired>
          <FormLabel>Category</FormLabel>
          <Input
            type="text"
            name="category"
            value={vendorDetails.category}
            onChange={(e) => setVendorDetails({ ...vendorDetails, category: e.target.value })}
          />
        </FormControl>

        {/* Other form fields */}
        
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={vendorDetails.contactPerson.email}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={vendorDetails.contactPerson.password}
            onChange={handleInputChange}
          />
        </FormControl>

        <Checkbox onChange={() => setShowPassword(!showPassword)}>Show Password</Checkbox>

        {formErrors.email && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.email}
          </Alert>
        )}

        {formErrors.password && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.password}
          </Alert>
        )}

        <Button type="submit" colorScheme="teal" size="lg" width="100%">
          Continue
        </Button>
      </form>
    </VStack>
  );
};

export default VendorDetailsForm;
