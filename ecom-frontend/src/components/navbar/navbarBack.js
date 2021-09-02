import { Box, Flex,Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button2 from "../button/button2";

const NavbarBack = (props) => {
  return (
    <div>
      <Box display="flex" bg="#FDF8E7" w="100%"  p={1} color="white">
        <Flex bg="#FDF8E7" w="50%" p={1} justifyContent="flex-start" >
        <Link to="/"><Box borderRadius="md" bg="#FDF8E7" color="black" px={4} h={12} alignSelf="center" fontSize={30} position="fixed">
            Shop & Chill
          </Box></Link>
        </Flex>
     
          
          <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box />
            <Box></Box>
            <Box></Box>
          <Button2 to="/" value="BACK" />
            <Box></Box>
       
</Grid>
      </Box>
    </div>
  );
};

export default NavbarBack;
