import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Button,
  Grid,
  GridItem,
  Box,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import CartItemCart from "../carditem/carditemCart";

const Cart = () => {
  return (
    <Box h="90%" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="70%" h="100%" bg="teal.200">
        <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    justifyContent="center">
      <GridItem colSpan={6} bg="white">
      <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={2} 
                flexWrap="wrap"
              >
                
                <CartItemCart />
                <CartItemCart />
                <CartItemCart />
                <CartItemCart />
                <CartItemCart />
              </Grid>
</GridItem>
    </Grid>
        </Box>
    </Box>
  );
};

export default Cart;
