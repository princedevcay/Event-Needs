import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { CLEAR_USER } from '../redux/types';
import logoImage from '../assets/logo.jpg';
import {
  Box,
  Flex,
  Image,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Button,
  Link as ChakraLink,
  HStack,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { vendor, loading, error } = useSelector((state) => state.vendor);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleLogout = () => {
    dispatch({ type: CLEAR_USER });
    navigate('/login');
  };

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const navigateToLogin = () => navigate('/login');
  const navigateToBussinessLists = () => navigate('/list-your-business');

  const isDesktop = useBreakpointValue({ base: false, md: true });

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box as="header" bg="white" px={10} py={4} shadow="md" w="full" textAlign="center" height={"80px"}>
      <Flex h={16} alignItems="center" justifyContent="space-between" fontFamily={"heading"} fontSize="xl">
        <Box zIndex="3">
          <Link as={RouterLink} to="/">
            <Image src={logoImage} alt="Logo" boxSize={{ base: '100px', md: '150px' }} borderRadius="full" />
          </Link>
        </Box>

        {/* Mobile Navigation Icon */}
        <IconButton
          icon={<FaBars />}
          aria-label="Open menu"
          onClick={toggleMobileNav}
          colorScheme="brown"
          display={{ base: 'inline-flex', md: 'none' }}
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={mobileNavOpen} placement="right" onClose={toggleMobileNav}>
          <DrawerOverlay />
          <DrawerContent fontFamily={"heading"} fontSize={"xl"} textTransform="Uppercase" fontWeight="bold">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Stack spacing={4}>
                <ChakraLink as={RouterLink} to="/" onClick={toggleMobileNav}>
                  Home
                </ChakraLink>
                <ChakraLink as={RouterLink} to="/vendors" onClick={toggleMobileNav}>
                  Vendors
                </ChakraLink>
                {/* Add more mobile menu items */}
                {!vendor  ? (
                  <>
                    <Button width="full"
                      onClick={navigateToLogin}
                      fontFamily="heading"
                      colorScheme="brown"
                      fontSize="4xl">
                    </Button>
                    <Button width="full" onClick={navigateToLogin} 
                    fontFamily="heading"
                    variant="outline" 
                    colorScheme="brown" 
                    fontSize="xl">
                      Sign In
                    </Button>
                  </>
                ) : (
                  <>
                  <Button onClick={navigateToLogin}
                      fontFamily="heading"
                      colorScheme="brown"
                      fontSize="xl">
                      List Your Business
                    </Button>
                  <Button width="full" 
                      onClick={handleLogout} 
                      colorScheme="red"
                      fontFamily="heading"
                      fontSize="xl">
                    Logout
                  </Button>
                  </>
                )}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {/* Centered Desktop Menu */}
        {isDesktop && (
          <HStack spacing={6} justify="center" flex="1" textTransform="uppercase" fontWeight="bold">
            <ChakraLink as={RouterLink} to="/" _hover={{ textDecoration: 'underline'}}>
              Home
            </ChakraLink>
            <ChakraLink as={RouterLink} to="/vendors" _hover={{ textDecoration: 'underline' }} >
              Vendors
            </ChakraLink>
            {/* Add more menu items */}
          </HStack>
        )}

        {/* Buttons for Desktop */}
        {isDesktop && (
          <Stack direction="row" spacing={4} display={{ base: 'none', md: 'inline-flex' }}>
            {!vendor  ? (
              <>
                <Button onClick={navigateToBussinessLists} colorScheme="brown" fontSize="xl">
                  List Your Business
                </Button>
                <Button onClick={navigateToLogin} variant="outline" colorScheme="brown" fontSize="xl">
                  Sign In
                </Button>
              </>
            ) : (
              <>
              <Button onClick={navigateToBussinessLists} colorScheme="brown" fontSize="xl">
                  List Your Business
                </Button>
              <Button onClick={handleLogout} colorScheme="red" fontSize="xl">
                Logout
              </Button>
              </>
            )}
          </Stack>
        )}
      </Flex>
    </Box>
  );
};

export default Header;
