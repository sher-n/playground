import {
    Flex,
    Heading,
    Input,
    Button,
    FormControl,
    FormLabel,
    FormHelperText,
    Box,
  } from "@chakra-ui/react";
  import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
  
  const Register = (props) => {
    const formBackground = useColorModeValue("gray.100", "gray.700");

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background="gray.100" p={12} rounded={6}>
          <Heading alignSelf="center" background={formBackground}>
                  Register
                </Heading>
            <FormControl id="register">
              <Input placeholder="username@email.com"
                  variant="filled" type="text" background="white" required/>
              <Input placeholder="Password"
                  variant="filled"
                  type="password" background="white" required/>
              <Input placeholder="Confirm Password"
                  variant="filled"
                  type="password" background="white" required/>
            </FormControl>
            <Button margin="10px" colorScheme="teal"> Register</Button>
          </Flex>
        </Flex>)
  
  };
  
  export default Register;