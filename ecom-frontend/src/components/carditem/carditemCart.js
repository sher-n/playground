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
import Button2 from "../button/button2";

const  CartItemCart = (props) => {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'THB',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  
    return (
      <div style={{ display: "block" }}>
      <Box
        maxW="sm"
        borderWidth="1px"
        margin="10px"
        borderRadius="lg"
        overflow="scroll"
        bg="#FDF8E7"
      >
        <AspectRatio maxW="100%" ratio={4 / 3}>
         <Link to={`/productdetail/${props.id}`}><Image src={props.link} /></Link>
        </AspectRatio>
        <Box p="2">
          <Box d="flex" alignItems="baseline">
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="red"
            >
              New
            </Badge>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {props.product_name}
          </Box>

          <Box>
            {formatter.format(props.price)}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
          
          </Box>
          <Box d="flex" justifyContent="center">
          
            <Link to={`/checkout/${props.id}`}><Button1 bgColor="#E47711" value="BUY" /></Link>
          </Box>
        </Box>
      </Box>
      <Box d="flex" justifyContent="center">
          <Box />
      <Button2 bg="#DF684E" value="REMOVE" />
      <Box />
          </Box>
          
    </div>
    )
  }

  export default CartItemCart;