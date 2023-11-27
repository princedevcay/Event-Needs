import { Fragment, useState } from "react";
import axios from 'axios';
import {
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Input,
  Button,
  useColorMode,
  Icon,
  Heading,
  useTheme
} from "@chakra-ui/react";


const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();


  // State for the login and registration forms
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    email: '',
    fullName: '',
  });

  // Update form state for login
  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Update form state for registration
  const handleRegisterFormChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLoginSubmit = async () => {
    try {
      const response = await axios.post('/api/users/login', loginForm);
      console.log(response.data);
      // Handle login success
    } catch (error) {
      console.error('Login error:', error.response?.data);
      // Handle login failure
    }
  };

  // Handle register form submission
  const handleRegisterSubmit = async () => {
    try {
      const response = await axios.post('/api/users/register', registerForm);
      console.log(response.data);
      // Handle registration success
    } catch (error) {
      console.error('Registration error:', error.response?.data);
      // Handle registration failure
    }
  };

  return (
    <Fragment>
      <Flex height="100vh" align="center" justify="center">
        <Button
          position="absolute"
          top="5"
          left="5"
          rounded="50%"
          onClick={() => toggleColorMode()}
        >
          <Icon name={colorMode === "light" ? "moon" : "sun"} />
        </Button>
        <Box
          p="20px"
          backgroundColor={colorMode === "light" ? "white" : "#313641"}
          shadow={"xl"}
        >
          <Flex align="center" justify="center" direction="column">
            <Heading fontSize='2xl'>LOGIN</Heading>
            <Tabs mt="15px">
              <TabList color="brown.300" border="none">
                <Tab _selected={{ color: "black.200"}} w="50%" fontFamily={theme.fonts.Heading}>Login</Tab>
                <Tab _selected={{ color: "black.200"}} w="50%" fontFamily={theme.fonts.Heading}>Register</Tab>
              </TabList>
              <TabPanels mt="15px">
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input
                      placeholder="Email"
                      size="lg"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginFormChange}
                    />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleLoginFormChange}
                      mt="20px"
                    />
                    <Button
                      size="lg"
                      mt="20px"
                      colorScheme='brown'
                      w="100%"
                      onClick={handleLoginSubmit}
                    >
                      Login
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input
                      placeholder="Username"
                      size="lg"
                      name="username"
                      value={registerForm.username}
                      onChange={handleRegisterFormChange}
                    />
                    <Input
                      placeholder="Email"
                      size="lg"
                      name="email"
                      value={registerForm.email}
                      onChange={handleRegisterFormChange}
                      mt="20px"
                    />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      name="password"
                      value={registerForm.password}
                      onChange={handleRegisterFormChange}
                      mt="20px"
                    />
                    <Input
                      placeholder="Full Name"
                      size="lg"
                      name="fullName"
                      value={registerForm.fullName}
                      onChange={handleRegisterFormChange}
                      mt="20px"
                    />
                    <Button
                      size="lg"
                      colorScheme='brown'
                      mt="20px"
                      w="100%"
                      onClick={handleRegisterSubmit}
                    >
                      Register
                    </Button>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
      </Flex>
    </Fragment>
  );
};

export default Login;