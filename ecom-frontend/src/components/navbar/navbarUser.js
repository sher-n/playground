import { Box, Flex } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";

const NavbarUser = (props) => {
    const user = {
        name: "Sher"
    }
  return (
    <div>
      <Box display="flex" bg="tomato" w="100%"  p={1} color="white">
        <Flex bg="white" w="100%" p={1} justifyContent="flex-start" >
        <Link to="/"><Box borderRadius="md" bg="white" color="black" px={4} h={12} alignSelf="center" fontSize={30}>
            Shop & Chill
          </Box></Link>
        </Flex>
        <Flex bg="white" w="100%" p={4} justifyContent="flex-end">
        <Link to="/profile">
        <Box as="text" borderRadius="xl" bg="white" color="black" px={8} h={14} marginTop={20} fontSize={20}>
        {"Welcome, " + user.name}
</Box>
        </Link>
          <Link to="/store"><Button2 value="MY STORE"/></Link>
          <Link to="/register"><Button2 value="CONTACT US"/></Link>
        </Flex>
      </Box>
    </div>
  );
};

export default NavbarUser;
