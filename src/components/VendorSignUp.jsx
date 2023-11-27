import React, { useState } from 'react';
import {
  Box, Container, Flex, VStack, FormControl, FormLabel, Input, Button, Progress, Heading, NumberInput, NumberInputField, Text, List, ListIcon, ListItem
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import axios from 'axios';


const VendorSignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      vendorName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      serviceCategory: '',
      experienceYears: 0,
      companySize: 0
    });
  
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault(); // Prevents default form submission behavior
    
      try {
        const response = await axios.post('/email.php', formData);
        console.log('Response:', response.data); // Logs only the response data
        setStep(4); // Move to the thank you step
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
    

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <Box  py={10}>
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          alignItems="center"
          justify="space-between"
        >
          {/* Left Column: Info & Reasons */}
          <VStack flex="1" spacing={5} alignItems="flex-start">
            <Heading as="h2" size="xl">
              Become a Vendor
            </Heading>
            <Text fontSize="lg">
              Join our platform to expand your reach and grow your business.
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Reach more customers
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Easy to use platform
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                Boosted online presence
              </ListItem>
              {/* ... more reasons ... */}
            </List>
          </VStack>

          {/* Right Column: Sign Up Form */}
          <Box bg="brown.50" w={{ base: 'full', lg: '50%' }} mt={{ base: 8, lg: 0 }} p={10}>
            {step <= 3 && (
              <Progress value={(step / 3) * 100} size="sm" colorScheme="brown" mb={6} />
            )}

          <VStack spacing={4} as="form" onSubmit={step === 3 ? handleSubmit : nextStep} w="full">
              {/* General Information */}
              {step === 1 && (
                <>
                  <Heading size="md">General Information</Heading>
                  <FormControl  id="vendor-name">
                    <FormLabel>Vendor Name</FormLabel>
                    <Input name="vendorName"  bg="white.50" type="text" onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="contact-person">
                    <FormLabel>Contact Person</FormLabel>
                    <Input name="contactPerson" bg="white.50" type="text" onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="vendor-email">
                    <FormLabel>Email Address</FormLabel>
                    <Input name="email" bg="white.50" type="email" onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="vendor-phone">
                    <FormLabel>Phone</FormLabel>
                    <Input name="phone" bg="white.50" type="text" onChange={handleInputChange} />
                  </FormControl>
                  <FormControl id="vendor-website">
                    <FormLabel>Website</FormLabel>
                    <Input name="website" bg="white.50" type="text" onChange={handleInputChange} />
                  </FormControl>
                  {/* Additional fields as needed */}
                </>
              )}

              {/* Services Offered */}
              {step === 2 && (
                <>
                  <Heading size="md">Services Offered (Primary Service)</Heading>
                  <FormControl id="vendor-service">
                    <FormLabel>Service Category</FormLabel>
                    <Input name="serviceCategory" bg="white.50" type="text" onChange={handleInputChange} />
                  </FormControl>
                  {/* Additional fields as needed */}
                </>
              )}

              {/* Experience */}
              {step === 3 && (
                <>
                  <Heading size="md">Experience</Heading>
                  <FormControl id="vendor-experience-years">
                    <FormLabel>Years of Experience</FormLabel>
                    <NumberInput min={0} onChange={(valueString) => setFormData({ ...formData, experienceYears: valueString })} value={formData.experienceYears}>
                  <NumberInputField name="experienceYears" bg="white.50" />
                </NumberInput>
                  </FormControl>
                  <FormControl id="vendor-company-size">
                    <FormLabel>Company Size</FormLabel>
                    <NumberInput min={1} onChange={(valueString) => setFormData({ ...formData, companySize: valueString })} value={formData.companySize}>
                     <NumberInputField name="companySize" bg="white.50" />
                    </NumberInput>              
                  </FormControl>
                  {/* Additional fields as needed */}
                </>
              )}

              {/* Thank You Section */}
              {step === 4 && (
                <VStack spacing={3}>
                  <Heading size="lg">Thank You for Signing Up!</Heading>
                  <Text>We'll review your submission and get in touch with you soon.</Text>
                </VStack>
              )}

              {/* Navigation Buttons */}
              <Flex w="full" justify="space-between">
                {step > 1 && step < 4 && <Button onClick={prevStep}>Previous</Button>}
                {step < 3 && <Button onClick={nextStep} colorScheme="brown">Next</Button>}
                {step === 3 && <Button onClick={handleSubmit} colorScheme="brown">Submit</Button>}
              </Flex>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default VendorSignUp;
