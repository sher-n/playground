import { Box, Flex } from "@chakra-ui/react";
import Button2 from "../button2/button2";
import { Link } from "react-router-dom";

const NavbarGuest = (props) => {
  return (
    <div>
      <Box display="flex" bg="tomato" w="100%"  p={1} color="white">
        <Flex bg="white" w="100%" p={1} justifyContent="flex-start" >
          <Box borderRadius="md" bg="white" color="black" px={4} h={12} alignSelf="center" fontSize={30}>
            Shop & Chill
          </Box>
        </Flex>
        <Flex bg="white" w="100%" p={4} justifyContent="flex-end">
          <Button2 value="CONTACT US" />
          <Link to="/login"><Button2 value="LOGIN"/></Link>
          <Link to="/register"><Button2 value="REGISTER"/></Link>
        </Flex>
      </Box>
    </div>
  );
};

export default NavbarGuest;
