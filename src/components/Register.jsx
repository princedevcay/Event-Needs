import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
} from '@chakra-ui/react';

export default function RegisterForm() {
  const bgBox = useColorModeValue('gray.50', 'gray.700');
  const colorScheme = useColorModeValue('brown', 'orange');

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Register</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Already have an account?{' '}
            <Link color={'blue.400'}>Login</Link> or{' '}
            <Link color={'blue.400'}>Reset Password</Link>
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={bgBox}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="userName">
              <FormLabel>User Name *</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email *</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password *</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="repeatPassword">
              <FormLabel>Repeat Password *</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="owner">
              <FormLabel>Owner</FormLabel>
              <Select placeholder="Select option">
                <option value="owner1">Owner 1</option>
                <option value="owner2">Owner 2</option>
                <option value="owner3">Owner 3</option>
              </Select>
            </FormControl>
            <Button
              colorScheme={colorScheme}
              _hover={{
                bg: `${colorScheme}.600`,
              }}>
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
