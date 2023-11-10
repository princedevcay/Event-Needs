import { Box, Heading, Text } from '@chakra-ui/react';

function ClearValueProposition() {
  return (
    <Box textAlign="center" py={10} color="brown.800" bg="brown.50" shadow="0 -2px 4px 0 rgba(0,0,0,0.10)">
      <Heading as="h2" size="xl" fontFamily="heading">
        Why Choose EventNeeds?
      </Heading>
      <Text mt={4} fontFamily="body">
        Your one-stop solution for finding the best vendors and event services.
      </Text>
    </Box>
  );
}

export default ClearValueProposition;
