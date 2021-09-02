import { Grid, GridItem, AspectRatio, Image, Button, Box} from "@chakra-ui/react";
import * as React from "react";
import { Link } from "react-router-dom";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";

const ProductDetail = (props) => {

  const product = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    name: "Car",
    id: 11,
    price: 999,
    description: "What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book it has"
  };
  
  return (
    <div><NavbarBack />
      <Box w="100vw" h="90vh" d="flex" flexDirection="column">
         <Box h="30%" alignSelf="center">
          <br />
          <Box fontSize="xl"><strong>PRODUCT DETAILS</strong></Box>
        </Box>
        <Box h="70%">
        <Grid
    h="50%"
    templateRows="repeat(1, 1fr)"
    templateColumns="repeat(4, 1fr)"
    gap={4}
  >
    <GridItem overflow="hidden"/>
      <AspectRatio ratio={4 / 3} d="flex" justifyContent="end">
        <Image src={product.imageUrl} borderRadius={25} />
      </AspectRatio>
  
      <Grid
templateRows="repeat(7, 1fr)"
templateColumns="repeat(3, 1fr)"
gap={3}
alignSelf="flex-start" fontSize="md">

          <Box marginTop={2}>NAME :</Box>
          <GridItem colSpan={2} marginTop={2}>
          {/* <div>{product.description}</div> */}
          <strong><div>{product.name}</div></strong>
          </GridItem>
          
          <div>ID :</div>
          <GridItem colSpan={2}>
          <strong><div>{product.id}</div></strong>
          </GridItem>
          
          <div>PRICE :</div>
          <GridItem colSpan={2} >
          <strong><div>{product.price}</div></strong>
          </GridItem>
          
          <GridItem fontSize="sm">DESCRIPTION :</GridItem>
          <GridItem colSpan={2} rowSpan={4}>
          <div>{product.description}</div>
          </GridItem>
          
          </Grid>

  </Grid>
        </Box>
        <br />
        <Box h="20%" bg="white" d="flex" justifyContent="center" flexWrap="wrap">
                    <Button4 bg="#243C49" value="CART" />
                    <Link to="/checkout"><Button4 bg="#DF684E" value="BUY"/></Link>
            </Box>
      </Box>
      </div>
  );
};

export default ProductDetail;

// <Grid
// templateRows="repeat(3, 1fr)"
// templateColumns="repeat(3, 1fr)"
// gap={9}
// justifyItems="center" alignSelf="center">

//           <div>NAME :</div>
//           <div>{product.name}</div>
//           <Button2 value="EDIT"/>
//           <div>ID :</div>
//           <div>{product.id}</div>
//           <Button2 value="ADD"/>
//           <div>PRICE :</div>
//           <div>{product.price}</div>
//           <Button2 value="EDIT"/>
//           </Grid>