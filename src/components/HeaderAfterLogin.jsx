// HeaderAfterLogin.js

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Image
} from '@chakra-ui/react';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import logoImage from '../assets/logo.jpg';

const HeaderAfterLogin = () => {
  return (
    <Box as="header" bg="white" px={10} shadow="md" w="full">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box zIndex="3">
          <RouterLink to="/">
            <Image src={logoImage} alt="Event Needs" boxSize={{ base: '100px', md: '150px' }} borderRadius="full" />
          </RouterLink>
        </Box>

        {/* Navigation Links */}
        <Box>
          <RouterLink to="/dashboard">
            Dashboard
          </RouterLink>
          {/* Add other authenticated user navigation links */}
        </Box>

        {/* User Profile Button with Dropdown */}
        <Menu>
          <MenuButton as={Button} rightIcon={<Avatar size="sm" />} variant="ghost">
            <FaUserCircle />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>

        {/* Mobile Menu Icon */}
        <Box display={{ base: 'block', md: 'none' }}>
          <IconButton
            icon={<FaBars />}
            aria-label="Open menu"
            // Add functionality for mobile menu
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderAfterLogin;
