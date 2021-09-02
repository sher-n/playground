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
import { Link } from "react-router-dom";
import Button1 from "../button/button1";

const  CartItem = () => {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    }
  
    return (
        <div style={{ display: "grid" }}>
        <Box
          bg="#FDF8E7"
          maxW="sm"
          borderWidth="1px"
          margin="10px"
          borderRadius="xl"
          overflow="scroll"
        >
          <AspectRatio maxW="90%" ratio={4 / 3} margin={5} >
           <Link to="/productdetail" ><Image borderRadius="md" src={property.imageUrl} /></Link>
          </AspectRatio>
          <Box p="2">
            <Box d="flex" flexDirection="column" marginTop={-5} marginLeft={5} marginBottom={5}>
              <Box><strong>Hotel De Luna</strong><Box>{property.formattedPrice}  THB</Box></Box>
              <Box></Box>
              
            </Box>

            <Box d="flex" justifyContent="space-between" margin={2}>
            
              <Button1 bgColor="#9F6D23" value="CART" />
              <Button1 bgColor="#E47711" value="BUY" />
            </Box>
          </Box>
        </Box>
      </div>
    )
  }

  export default CartItem;