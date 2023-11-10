import { Box, Text } from '@chakra-ui/react';

function About() {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Text fontSize="xl">About</Text>
      <Text mt={4}>Description of EventNeeds services</Text>
    </Box>
  );
}

export default About;
