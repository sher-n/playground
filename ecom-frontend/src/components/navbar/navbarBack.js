import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button2 from "../button/button2";

const NavbarBack = (props) => {
  return (
    <div>
      <Box display="flex" bg="tomato" w="100%"  p={1} color="white">
        <Flex bg="white" w="100%" p={1} justifyContent="flex-start" >
          <Link to="/"><Box borderRadius="md" bg="white" color="black" px={4} h={12} alignSelf="center" fontSize={30}>
            Shop & Chill
          </Box></Link>
        </Flex>
        <Flex bg="white" w="100%" p={4} justifyContent="flex-end">
          {/* <Button2 value="CONTACT US" /> */}
          <Link to="/"><Button2 value="BACK"/></Link>
          {/* <Button2 value="REGISTER"/> */}
        </Flex>
      </Box>
    </div>
  );
};

export default NavbarBack;
