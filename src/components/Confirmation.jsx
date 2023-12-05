import React from 'react';
import {
  Box,
  Text,
  VStack,
  Button,
  Center,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Confirmation = () => {
  return (
    <VStack spacing={4} align="center" width="100%" maxW="400px" mx="auto">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          Registration Successful!
        </Text>
      </Box>

      <Box>
        <Text fontSize="lg" textAlign="center">
          Thank you for registering your business with us. Your account has been successfully created.
        </Text>
      </Box>

      <Box>
        <Text fontSize="lg" textAlign="center">
          You can now start managing your vendor profile and packages.
        </Text>
      </Box>

      <Center>
        <Button
          as={RouterLink}
          to="/dashboard"
          colorScheme="teal"
          size="lg"
          width="100%"
        >
          Go to Dashboard
        </Button>
      </Center>

      <Center>
        <Text>
          Already have an account?{' '}
          <ChakraLink as={RouterLink} to="/login" color="teal.500">
            Sign In
          </ChakraLink>
        </Text>
      </Center>
    </VStack>
  );
};

export default Confirmation;
