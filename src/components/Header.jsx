import { useState } from 'react';
import {
  Box, Flex, Button, HStack, Link, Image, IconButton, Stack,
  Menu, MenuButton, MenuList, MenuItem, Collapse, Drawer,
  DrawerOverlay, DrawerContent, DrawerCloseButton, useBreakpointValue, VStack
} from '@chakra-ui/react';
import { Link as RouterLink, useNavigate} from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp, FaUserCircle  } from 'react-icons/fa';
import logoImage from '../assets/logo.jpg'; // Ensure the correct path to your logo image

const Header = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  // useHistory for React Router v5 or useNavigate for v6
  const navigate = useNavigate(); // or const navigate = useNavigate() for v6

  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const navigateToLogin = () => navigate('/login'); // or navigate('/login') for v6

  const toggleMobileSubMenu = () => setMobileSubMenuOpen(!mobileSubMenuOpen);

  return (
    <Box as="header" bg="white" px={10} shadow="md" w="full">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Logo */}
        <Box zIndex="3">
          <Link as={RouterLink} to="/">
            <Image src={logoImage} alt="Event Needs" boxSize={{ base: '100px', md: '150px' }} borderRadius="full" />
          </Link>
        </Box>

        {/* Menu for Desktop */}
        {!isMobile && (
          <HStack as="nav" spacing={4} colorScheme={"black"} fontSize={"2xl"} fontFamily="heading">
            <Link 
              as={RouterLink} 
              to="/" 
            
              _hover={{ textDecoration: 'underline' }}>Home</Link>
            <Link 
              as={RouterLink} 
              to="/vendors" 
            
              _hover={{ textDecoration: 'underline' }}>Vendors</Link>
            {/* Submenu */}
            <Menu>
              <MenuButton  as={Button} fontSize={"2xl"} colorScheme={"black"}
                rightIcon={<FaChevronDown />} 
               
                variant="ghost"
                onMouseEnter={(event) => event.currentTarget.click()}>
                Vendor Categories
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/vendors/vendor">Photography</MenuItem>
                <MenuItem as={RouterLink} to="/vendors/vendor">Wedding</MenuItem>
              </MenuList>
            </Menu>
            <Link as={RouterLink} to="/events">Events</Link>
          </HStack>
        )}

        {/* Buttons */}
        <Stack direction="row" 
          spacing={4}
          display={{ base: 'none', md: 'inline-flex' }}>
          <Button as={RouterLink} to="/login" colorScheme="brown">List Your Business</Button>
          <Button as={RouterLink} variant="outline" to="/login" colorScheme="brown">Sign In</Button>
        </Stack>

        {/* Mobile Menu Icon */}
        {isMobile && (
          <Stack direction="row" spacing={10}>
          <IconButton
            icon={<FaUserCircle />}
            colorScheme={"brown"}
            aria-label="Account"
            variant="outline"
            onClick={navigateToLogin}
          />
          <IconButton
            icon={<FaBars />}
            aria-label="Open menu"
            onClick={toggleMobileNav}
            colorScheme={"brown"}
          />
        </Stack>
        )}
      </Flex>

      {/* Mobile Navigation Drawer */}
      <Drawer isOpen={mobileNavOpen} placement="right" onClose={toggleMobileNav}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box p={4}>
            <Stack as="nav" spacing={4}>
              <Link as={RouterLink} to="/" onClick={toggleMobileNav}>Home</Link>
              <Link as={RouterLink} to="/vendors" onClick={toggleMobileNav}>Vendors</Link>
              <Button width="full" justifyContent="space-between" rightIcon={mobileSubMenuOpen ? <FaChevronUp /> : <FaChevronDown />} onClick={toggleMobileSubMenu}>
               Vendor Categories
              </Button>
              <Collapse in={mobileSubMenuOpen}>
                <Stack mt={2}>
                  <Link as={RouterLink} to="/vendors/vendor" onClick={toggleMobileNav}>Photography</Link>
                  <Link as={RouterLink} to="/vendors/vendor" onClick={toggleMobileNav}>Wedding</Link>
                  {/* More categories */}
                </Stack>
              </Collapse>
              <Link as={RouterLink} to="/events" onClick={toggleMobileNav}>Events</Link>
              {/* Buttons */}
        <VStack direction="row" spacing={4}>
          <Button as={RouterLink} to="/login" colorScheme="brown">List Your Business</Button>
          <Button as={RouterLink} variant="outline" to="/login" colorScheme="brown">Sign In</Button>
        </VStack>
            </Stack>
            
          </Box>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
