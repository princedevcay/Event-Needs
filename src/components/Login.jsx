import { Fragment } from "react";
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
            <Heading fontSize='2xl' >LOGIN</Heading>
            <Tabs mt="15px">
              <TabList color="brown.300" border="none" > 
                <Tab _selected={{ color: "black.200"}} w="50%" fontFamily={theme.fonts.Heading}>Login</Tab>
                <Tab _selected={{ color: "black.200"}} w="50%" fontFamily={theme.fonts.Heading}>Register</Tab>
                <Tab _selected={{ color: "black.200"}} w="100%" fontFamily={theme.fonts.Heading}>Reset Password</Tab>
              </TabList>
              <TabPanels mt="15px">
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input placeholder="Username or Email" size="lg" />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      mt="20px"
                    />
                    <Button size="lg" mt="20px" colorScheme='brown' w="100%">
                      Login
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input placeholder="Username" size="lg" />
                    <Input
                      placeholder="Password"
                      size="lg"
                      type="password"
                      mt="20px"
                    />
                    <Input placeholder="Email" size="lg" mt="20px" />
                    <Input placeholder="Full Name" size="lg" mt="20px" />
                    <Button size="lg" colorScheme='brown' mt="20px" w="100%">
                      Register
                    </Button>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Flex align="center" justify="center" direction="column">
                    <Input placeholder="Email or Username" size="lg"  />
                    <Button size="lg" colorScheme='brown' mt="20px" w="100%">
                      Reset Password
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