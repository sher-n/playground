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
import CartItem from "../carditem/carditem";

const Body = () => {
  return (
    <Box h="90%" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="70%" h="100%" bg="teal.200">
        <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    justifyContent="center">
      <GridItem colSpan={6} bg="white">
        <Tabs>
          <TabList>
            <Tab>Electricity</Tab>
            <Tab>Vehicle</Tab>
            <Tab>Home</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={2}
              >
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateRows="repeat(4, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
              ></Grid>
            </TabPanel>
            <TabPanel>
              <Grid
                templateRows="repeat(4, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={4}
              ></Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
        </Box>
    </Box>
  );
};

export default Body;
