import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Button,
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Image,
  Badge,
  AspectRatio,
} from "@chakra-ui/react";
import CartItem from "../carditem/carditem";

const Body = () => {

    

  return (
    <Box h="90%" w="100%" bg="white" display="flex" justifyContent="center"   >
        <Box w="70%" h="100%" bg="teal.200">
        <Grid
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={4}
    justifyContent="center">
      <GridItem colSpan={6} bg="white">
        <Tabs>
          <TabList>
            <Tab>CAR</Tab>
            <Tab>HOME</Tab>
            <Tab>FASHION</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid
                minChildWidth="300px" 
                gap={2}
                
              >
                <CartItem />
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(3, 1fr)"
                gap={2}
              >
            <SimpleGrid minChildWidth="120px" spacing="40px">
  <Box bg="tomato" height="160px"></Box>
  <Box bg="tomato" height="160px"></Box>
  <Box bg="tomato" height="160px"></Box>
  <Box bg="tomato" height="160px"></Box>
  <Box bg="tomato" height="160px"></Box>
  <Box bg="tomato" height="160px"></Box>
</SimpleGrid>
</Grid>
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
