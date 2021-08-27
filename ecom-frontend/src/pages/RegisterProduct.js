import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Select
} from "@chakra-ui/react";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { Link } from "react-router-dom";

const RegisterProduct = (props) => {
  const formBackground = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <div w="60%">
      <Flex direction="column" background="gray.100" p={12} rounded={6}>
        <Heading alignSelf="center" background={formBackground}>
          Register Product
        </Heading>
        <FormControl id="register">
          <Input
            placeholder="productname"
            variant="filled"
            type="text"
            background="white"
            required
          />
          <Input
            placeholder="image URL"
            variant="filled"
            type="text"
            background="white"
            required
          />
          <Input
            placeholder="price"
            variant="filled"
            type="text"
            background="white"
            required
          />
          <Select placeholder="Select option">
  <option value="option1">CAR</option>
  <option value="option2">SPORT</option>
  <option value="option3">FASHION</option>
</Select>
          <Input
            placeholder="description"
            variant="filled"
            type="text"
            background="white"
          />
          <Input
            placeholder="username@email.com"
            variant="filled"
            type="text"
            background="white"
            required
          />
        </FormControl>
        <Button margin="10px" colorScheme="teal">
          ADD PRODUCT
        </Button>
        <Link to="/store2"><Button margin="10px" colorScheme="teal">
          MY STORE
        </Button></Link>
      </Flex>
      </div>
    </Flex>
  );
};

export default RegisterProduct;
