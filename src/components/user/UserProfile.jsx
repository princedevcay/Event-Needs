import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CLEAR_USER } from '../../redux/types';
import { useNavigate } from 'react-router-dom';
import Header from '../Header'
import Footer from '../Footer'
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Switch,
  Text,
  Grid,
  GridItem,
  useColorModeValue,
  VStack,
  HStack,
  Tag,
  Select,
  Divider,
  Spacer
} from '@chakra-ui/react';

const UserProfile = () => {
  const userDetails = useSelector((state) => state.user.userDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: CLEAR_USER });
    navigate('/login');
  };

  if (!userDetails) {
    return <Text>No user data found. Please log in.</Text>;
  }

  return (
    <>
    <Flex direction="column" minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <Flex bg={useColorModeValue('white', 'gray.800')} px={4} py={3} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">User Profile</Heading>
        <Button onClick={handleLogout} colorScheme="red">Logout</Button>
      </Flex>

      {/* Main Content */}
      <Flex flex="1" my={5}>
        {/* Sidebar */}
        <Box width="20%" bg={useColorModeValue('white', 'gray.700')} p={5}>
          {/* Sidebar content here */}
        </Box>

        {/* Profile Content */}
        <Box flex="1" bg={useColorModeValue('white', 'gray.700')} p={5} mx={2}>
      <Heading size="lg" mb={6}>Profile Information</Heading>
      <Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        <GridItem>
          <FormControl id="name">
            <FormLabel>Name</FormLabel>
            <Input type="text" defaultValue={userDetails.name} />
          </FormControl>
        </GridItem>
        {/* Repeat GridItem for each field */}
        <GridItem>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" defaultValue={userDetails.email} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="text" defaultValue={userDetails.username} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="username">
            <FormLabel>Phone Number</FormLabel>
            <Input type="text" defaultValue={userDetails.phoneNumber} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="dateofbirth">
            <FormLabel>Date of Birth</FormLabel>
            <Input type="text" defaultValue={userDetails.dateOfBirth} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="gender">
            <FormLabel>Gender</FormLabel>
            <Input type="text" defaultValue={userDetails.gender} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="language">
            <FormLabel>Language</FormLabel>
            <Input type="text" defaultValue={userDetails.language} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="notifications" display="flex" alignItems="center">
            <FormLabel mb="0">Notifications</FormLabel>
            <Switch isChecked={userDetails.notifications} colorScheme="blue" />
          </FormControl>
        </GridItem>
        </Grid>
        <Heading size="lg" mt={6} mb={6}>Address</Heading>   
        <Grid templateColumns={{ sm: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
        <GridItem>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input type="text" defaultValue={userDetails.address} />
          </FormControl>
        </GridItem>
        <GridItem>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input type="email" defaultValue={userDetails.email} />
          </FormControl>
        </GridItem>
        <GridItem colSpan={{ sm: 2, md: 1 }}>
          <FormControl id="bio">
            <FormLabel>Bio</FormLabel>
            <Input type="text" defaultValue={userDetails.bio} />
          </FormControl>
        </GridItem>
        {/* Social Media Links */}
        <GridItem colSpan={{ sm: 2, md: 1 }}>
          <FormControl id="twitter">
            <FormLabel>Twitter</FormLabel>
            <Input type="text" defaultValue={userDetails.socialMedia?.twitter} />
          </FormControl>
          <FormControl id="facebook" mt={4}>
            <FormLabel>Facebook</FormLabel>
            <Input type="text" defaultValue={userDetails.socialMedia?.facebook} />
          </FormControl>
          <FormControl id="linkedIn" mt={4}>
            <FormLabel>LinkedIn</FormLabel>
            <Input type="text" defaultValue={userDetails.socialMedia?.linkedIn} />
          </FormControl>
        </GridItem>
         {/* Roles - Assuming roles to be displayed as tags */}
         <GridItem colSpan={2}>
          <FormControl id="roles">
            <FormLabel>Role:s</FormLabel>
            <HStack spacing={2}>
              {userDetails.roles?.map((role, index) => (
                <Tag size="md" key={index} variant="solid" colorScheme="blue">
                  {role}
                </Tag>
              ))}
            </HStack>
          </FormControl>
        </GridItem>
        {/* Last Login */}
        <GridItem colSpan={2}>
          <FormControl id="lastLogin">
            <FormLabel>Last Login</FormLabel>
            <Text>
              {userDetails.lastLogin ? new Date(userDetails.lastLogin).toLocaleString() : 'Never'}
            </Text>
          </FormControl>
        </GridItem>
      </Grid>
      {/* Save Button */}
      <Button mt={4} colorScheme="blue">Save All</Button>
    </Box>

        {/* Profile Picture Section */}
        <Box width="20%" bg={useColorModeValue('white', 'gray.700')} p={5}>
          <Flex direction="column" alignItems="center">
            <Avatar size="2xl" src={userDetails.photo || '/path/to/default/avatar'} />
            <Button mt={4} colorScheme="blue">Change Picture</Button>
          </Flex>
        </Box>
      </Flex>
      <Box as="footer" bg={useColorModeValue('white', 'gray.800')} p={4}>
      </Box>
    </Flex>
    <Footer/>
    </>
  );
};

export default UserProfile;
