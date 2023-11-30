import { Fragment, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_USER } from '../redux/types'; // Adjust the path based on your file structure

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
  useTheme,
  Text
} from "@chakra-ui/react";


const Login = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const theme = useTheme();
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [tabIndex, setTabIndex] = useState(0); // 0 for login, 1 for register
  const dispatch = useDispatch();
  

  // State for the login and registration forms
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
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
      const response = await axios.post('https://event-needs.com/api/login', loginForm);
      if (response.data) {
        const userProfileResponse = await axios.get(`https://event-needs.com/api/user/${response.data.userId}`, {
          headers: { Authorization: `Bearer ${response.data.token}` }
        });
        const userData = {
          token: response.data.token,
          email: response.data.email,
          id: response.data.userId,
          name: userProfileResponse.data.name, // Fetch name from user profile
        };
        dispatch({ type: SET_USER, payload: userData });
        navigate('/profile');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || ['Login failed']);
        setSuccessMessage('');
      }
    }
  };
  

  // Handle register form submission
const handleRegisterSubmit = async () => {
  try {
    const response = await axios.post('https://event-needs.com/api/register', registerForm);
    if (response.data) {
      setSuccessMessage('Registration successful!');
      setErrors([]);
      setTabIndex(0); // Switch to the login tab
    }
  } catch (error) {
    if (error.response && error.response.data) {
      setErrors(error.response.data.errors || ['Registration failed']);
      setSuccessMessage('');
    }
  }
};

  return (
    <Fragment>
      <Flex height="100vh" align="center" justify="center">
        <Button position="absolute" top="5" left="5" rounded="50%" onClick={() => toggleColorMode()}>
          <Icon name={colorMode === "light" ? "moon" : "sun"} />
        </Button>
        <Box p="20px" backgroundColor={colorMode === "light" ? "white" : "#313641"} shadow="xl">
          <Flex align="center" justify="center" direction="column">
            <Heading fontSize='2xl'>LOGIN</Heading>
            <Tabs index={tabIndex} onChange={setTabIndex} mt="15px">
              <TabList color="brown.300" border="none">
                <Tab _selected={{ color: "black.200" }} w="50%" fontFamily={theme.fonts.heading}>Login</Tab>
                <Tab _selected={{ color: "black.200" }} w="50%" fontFamily={theme.fonts.heading}>Register</Tab>
              </TabList>
              <TabPanels mt="15px">
                <TabPanel>
                  {/* Display error and success messages */}
                  {errors.map((error, index) => <Text key={index} color="red.500">{error.msg || error}</Text>)}
                  {successMessage && <Text color="green.500">{successMessage}</Text>}
                    {/* Login form fields */}
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
                  {/* Display error and success messages */}
                  {errors.map((error, index) => <Text key={index} color="red.500">{error.msg || error}</Text>)}
                  {successMessage && <Text color="green.500">{successMessage}</Text>}

                  <Flex align="center" justify="center" direction="column">
                    {/* Registration form fields */}
                    <Input
                      placeholder="Name"
                      size="lg"
                      name="name"
                      value={registerForm.name}
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