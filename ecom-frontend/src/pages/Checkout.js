import { Box , Flex, Grid, GridItem } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
const CheckOut = (props) => {
    
    return (
        <Box h="90vh" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="teal.200" display="block">
            <Box h="20%" bg="teal.300">Checkout</Box>
            <Box h="60%" bg="gray" d="block">
            <Grid
  h="100%"
  templateRows="repeat(4, 1fr)"
  templateColumns="repeat(5, 1fr)"
  gap={4}
>
  <GridItem rowSpan={4} colSpan={3} bg="black" />
  <GridItem colSpan={1} bg="papayawhip" />
  <GridItem colSpan={1} bg="teal">test</GridItem>
  <GridItem colSpan={1} bg="tomato" />
  <GridItem colSpan={1} bg="tomato" />
  <GridItem colSpan={1} bg="papayawhip" />
  <GridItem colSpan={1} bg="papayawhip" />
  <GridItem colSpan={1} bg="tomato" />
  <GridItem colSpan={1} bg="tomato" />
</Grid>

          

            </Box>
        </Box>
        </Box>
    )
}

export default CheckOut;