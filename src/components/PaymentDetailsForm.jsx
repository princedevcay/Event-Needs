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
} from '@chakra-ui/react';

const PaymentDetailsForm = ({ onDataUpdate, onContinue }) => {
  const [paymentDetails, setPaymentDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!paymentDetails.cardHolderName) {
      errors.cardHolderName = 'Cardholder name is required.';
    }
    if (!paymentDetails.cardNumber.match(/^\d{16}$/)) {
      errors.cardNumber = 'Please enter a valid 16-digit card number.';
    }
    if (!paymentDetails.expirationDate.match(/^\d{2}\/\d{2}$/)) {
      errors.expirationDate = 'Please enter a valid expiration date (MM/YY).';
    }
    if (!paymentDetails.cvv.match(/^\d{3}$/)) {
      errors.cvv = 'Please enter a valid 3-digit CVV.';
    }
    // Add other validation rules as needed
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({
      ...paymentDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      onDataUpdate(paymentDetails);
      onContinue();
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <VStack spacing={4} align="left" width="100%" maxW="400px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl id="cardHolderName" isRequired>
          <FormLabel>Cardholder Name</FormLabel>
          <Input
            type="text"
            name="cardHolderName"
            value={paymentDetails.cardHolderName}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="cardNumber" isRequired>
          <FormLabel>Card Number</FormLabel>
          <Input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="expirationDate" isRequired>
          <FormLabel>Expiration Date (MM/YY)</FormLabel>
          <Input
            type="text"
            name="expirationDate"
            value={paymentDetails.expirationDate}
            onChange={handleInputChange}
          />
        </FormControl>

        <FormControl id="cvv" isRequired>
          <FormLabel>CVV</FormLabel>
          <Input
            type="text"
            name="cvv"
            value={paymentDetails.cvv}
            onChange={handleInputChange}
          />
        </FormControl>

        {formErrors.cardHolderName && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.cardHolderName}
          </Alert>
        )}

        {formErrors.cardNumber && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.cardNumber}
          </Alert>
        )}

        {formErrors.expirationDate && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.expirationDate}
          </Alert>
        )}

        {formErrors.cvv && (
          <Alert status="error">
            <AlertIcon />
            {formErrors.cvv}
          </Alert>
        )}

        <Button type="submit" colorScheme="teal" size="lg" width="100%">
          Continue
        </Button>
      </form>
    </VStack>
  );
};

export default PaymentDetailsForm;
