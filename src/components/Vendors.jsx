import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useFadeInAnimation from './useFadeInAnimation';
import axios from 'axios';
import { Box, Grid, Input, Select, Flex, Button, Heading, VStack, HStack, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VendorCard from '../components/VendorCard';

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fadeInProps = useFadeInAnimation();

  useEffect(() => {
    const fetchVendors = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/api/vendors');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      setIsLoading(false);
    };

    fetchVendors();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Or any other loading state you want to show
  }

  return (
    <Box>
      <Header />
      <motion.div {...fadeInProps}>
      <Box as="main">
        <VStack spacing={8} color="brown.800" bg="brown.50" p={10}>
          <Heading as="h1" size="xl">Wedding Vendors</Heading>
          <Flex justify="space-between" align="center" mb={4}>
            <HStack spacing={4}>
              <Select placeholder="Vendor Category">
                {/* Options would be mapped here */}
              </Select>
              <Select placeholder="Sort By">
                {/* Options would be mapped here */}
              </Select>
              <Select placeholder="Price Range">
                {/* Options would be mapped here */}
              </Select>
              <Input placeholder="Search vendor by name" w="sm" />
              <Button colorScheme="brown" w={'50%'} p={6}>Filter</Button>
            </HStack>
          </Flex>
        </VStack>
        <Flex direction={['column', 'column', 'row']} gap={4} py={10} mx={12}>
          <Box flex="2" pr={[0, 0, 4]}>
            <Text fontSize="lg" p={4} bg="gray.200" borderRadius="md">
              Additional Information or Actions
            </Text>
            {/* You can place more content here, such as filters or ads */}
          </Box>
          <VStack flex="5" spacing={6}>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
              {vendors.map((vendor) => (
                <VendorCard
                  key={vendor.id}
                  vendor={vendor} // Pass the entire vendor object
                  isFeatured={vendor.isFeatured}
                />
              ))}
            </Grid>
          </VStack>
        </Flex>
      </Box>
      </motion.div>
      <Footer />
    </Box>
  );
};

export default Vendors;
