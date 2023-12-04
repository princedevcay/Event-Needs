// components/PackageSelection.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPackages } from '../redux/actions/packageActions';
import { Box, Heading, Button, SimpleGrid } from '@chakra-ui/react';

const PackageSelection = () => {
  const dispatch = useDispatch();
  const { packages, loading, error } = useSelector(state => state.packages);

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  if (loading) return <Box>Loading packages...</Box>;
  if (error) return <Box>Error loading packages: {error}</Box>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={10} p={5}>
      {packages.map((pkg) => (
        <Box key={pkg._id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
          <Heading as="h3" size="lg" marginBottom="2">{pkg.title}</Heading>
          {/* Display other package details */}
          <Button colorScheme="blue">Select</Button>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default PackageSelection;
