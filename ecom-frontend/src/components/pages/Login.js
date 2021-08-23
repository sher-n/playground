import { Flex, Heading, Input, Button, FormControl , Box} from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {
    return (
        <Flex height="95vh" alignItems="center"
        justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={12}
            rounded={6}
          >
            <form onSubmit={handleSubmit}>

            <Heading mb={6} alignSelf="center">
              Log in
            </Heading>
            <Input
              placeholder="youremail@email.com"
              mb={3}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              />
            <Input
              placeholder="password"
              variant="filled"
              mb={3}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              />
            <Button colorScheme="teal" type="submit"> Login</Button>
              </form>
          </Flex>
        </Flex>
    )
}

export default Login;