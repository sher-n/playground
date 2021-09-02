import { Box , Flex, Grid, GridItem,AspectRatio, Image } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";
const CheckOut = (props) => {
  
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
          <Box fontSize="xl"><strong>CHECKOUT</strong></Box>
        </Box>
        <Box h="70%">
        <Grid
    h="50%"
    templateRows="repeat(1, 1fr)"
    templateColumns="repeat(4, 1fr)"
    gap={4}
  >
    <GridItem overflow="hidden"/>
      <AspectRatio ratio={4 / 3} d="flex" justifyContent="end" >
        <Image src={product.imageUrl} />
      </AspectRatio>
  
      <Grid
templateRows="repeat(7, 1fr)"
templateColumns="repeat(3, 1fr)"
gap={3}
alignSelf="flex-start" fontSize="md">

          <div>NAME :</div>
          <GridItem colSpan={2}>
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
        <Box h="30%" bg="white" d="flex" justifyContent="center">
                    <Link to="/"><Button4 bg="#DF684E" value="BUY"/></Link>
            </Box>
      </Box>
      </div>
  );
};

export default CheckOut;