// components/ListYourBusiness.js
import PackageSelection from '../components/PackageSelection';
import { Box, Heading, Text, Divider } from '@chakra-ui/react';
import Header from '../components/Header'
import Footer from '../components/Footer'

const ListYourBusiness = () => {
  return (
    <>
    <Header/>
    <Box p={5}>
      <Heading as="h1" size="xl" textAlign="center" mb={5}>List Your Business</Heading>

      <Box mb={5}>
        <Heading as="h2" size="lg" mb={3}>Why List With Us?</Heading>
        <Text fontSize="md">
          Listing your business with us connects you to a vast network of clients looking for your services. Gain exposure, increase bookings, and grow your business.
        </Text>
      </Box>

      <Divider my={5} />

      <Box mb={5}>
        <Heading as="h2" size="lg" mb={3}>Choose Your Package</Heading>
        <PackageSelection />
      </Box>

      <Divider my={5} />

      <Box mb={5}>
        <Heading as="h2" size="lg" mb={3}>Registration Process</Heading>
        <Text fontSize="md">
          Our simple registration process will have you up and running in no time. Just select a package, fill in your business details, and complete the verification process.
        </Text>
      </Box>

      <Divider my={5} />

      <Box mb={5}>
        <Heading as="h2" size="lg" mb={3}>Get Verified</Heading>
        <Text fontSize="md">
          Gain trust and credibility by completing our verification process. This includes providing business documentation and passing our quality checks.
        </Text>
      </Box>

      {/* Additional sections as needed */}
    </Box>
    <Footer/>
    </>
  );
};

export default ListYourBusiness;
