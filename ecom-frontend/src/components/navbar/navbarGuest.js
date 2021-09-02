import { Box, Flex, Grid } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";

const NavbarGuest = (props) => {
  return (
    <div>
      <Box display="flex" bg="#FDF8E7" w="100%"  p={1} color="white">
        <Flex bg="#FDF8E7" w="50%" p={1} justifyContent="flex-start" >
        <Link to="/"><Box borderRadius="md" bg="#FDF8E7" color="black" px={4} h={12} alignSelf="center" fontSize={30}>
            Shop & Chill
          </Box></Link>
        </Flex>
     
          
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box />
            <Box></Box>
          <Button2 to="/" value="CONTACT US" />
          <Button2 to="/login" value="LOGIN"/>
          <Button2 to="/register" value="REGISTER"/>
</Grid>
      </Box>
    </div>
  );
};

export default NavbarGuest;
