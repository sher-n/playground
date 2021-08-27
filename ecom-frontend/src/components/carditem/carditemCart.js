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
import Button2 from "../button/button2";

const  CartItemCart = () => {
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
          maxW="sm"
          borderWidth="1px"
          margin="10px"
          borderRadius="lg"
          overflow="hidden"
        >
          <AspectRatio maxW="100%" ratio={4 / 3}>
           <Link to="/productdetail" ><Image src={property.imageUrl} /></Link>
          </AspectRatio>
          <Box p="2">
            <Box d="flex" alignItems="baseline">
              <Badge
                borderRadius="full"
                px="2"
                colorScheme="teal"
              >
                New
              </Badge>
              <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {property.amount} pieces
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {property.name}
            </Box>

            <Box>
              {property.price}
              <Box as="span" color="gray.600" fontSize="sm">
                THB
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              <Box
                as="span"
                ml="2"
                color="gray.600"
                fontSize="sm"
              >
                555 review
              </Box>
            </Box>
            <Box d="flex" justifyContent="space-between">
              <Button bgColor="red.200">Buy</Button>
            </Box>
          </Box>
        </Box>
        <Button2 value="REMOVE"/>
      </div>
    )
  }

  export default CartItemCart;