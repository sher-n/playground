import {
  Flex,
  Alert,
  AlertIcon,
  Stack,
  Button,
  FormControl,
  Box,
} from "@chakra-ui/react";
import InputComponent from "../components/input/input";
import { useState } from "react";
import NavbarBack from "../components/navbar/navbarBack";
import axios from "../config/axios";
import { withRouter } from "react-router-dom";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  const RegisterUser =  () => {

      axios.post("/register", {
        username: username,
        email: email,
        password: password
      }).then(res => {
        console.log(res);
        alert(res.data.message);
        props.history.push("/login");
      }).catch(e => console.log(e));
  
}

  return (
    <div><NavbarBack />
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="white"
        w="max"
        alignItems="center"
        p={20}
        rounded={6}
      >
        <Button w="md" h={65} background="#243C49" colorScheme="linkedin">
          SIGN UP
        </Button>
        <br />
        <FormControl id="register">
          <InputComponent
            placeholder="Username"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />
          <InputComponent
            placeholder="Email"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <InputComponent
            placeholder="Password"
            variant="filled"
            type="password"
            background="white"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <InputComponent
            placeholder="Confirm Password"
            variant="filled"
            type="password"
            background="white"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {password === confirmPassword ? (
            <br />
          ) : (
            <Alert status="warning">
              <AlertIcon />
              Seems your password and confirm password is not matched.
            </Alert>
          )}
        </FormControl>
        <Button borderRadius="3xl" w="lg" bg="#6D4D36" colorScheme="orange" onClick={RegisterUser} >
          {" "}
          Register
        </Button>
      </Flex>
    </Flex>
    </div>
  );
};

export default withRouter(Register);
