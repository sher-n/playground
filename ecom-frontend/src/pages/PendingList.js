import { Box , Flex, Grid, GridItem } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
import NavbarBack from "../components/navbar/navbarBack";
const PendingList = (props) => {
    
    return (
      <div><NavbarBack />
        <Box h="90vh" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="teal.200" display="block">
            <Box h="20%" bg="teal.300">Pending List</Box>
            <Box h="60%" bg="gray" d="block">
            <Grid templateColumns="repeat(5, 1fr)" gap={4} marginTop={5}>
  <GridItem colSpan={3} h="20" bg="tomato" />
  <GridItem colSpan={2} h="20" bg="papayawhip" />
</Grid>
            <Grid templateColumns="repeat(5, 1fr)" gap={4} marginTop={5}>
  <GridItem colSpan={3} h="20" bg="#9F6D23" />
  <GridItem colSpan={2} h="20" bg="papayawhip" />
</Grid>
            <Grid templateColumns="repeat(5, 1fr)" gap={4} marginTop={5}>
  <GridItem colSpan={3} h="20" bg="tomato" />
  <GridItem colSpan={2} h="20" bg="papayawhip" />
</Grid>

          

            </Box>
        </Box>
        </Box>
    
        </div>)
}

export default PendingList;