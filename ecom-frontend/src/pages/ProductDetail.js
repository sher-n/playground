import { Grid, GridItem, AspectRatio, Image, Button,} from "@chakra-ui/react";
import * as React from "react";


const ProductDetail = (props) => {
    const product = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        name: "Car",
        id: 11,
        price: 999,
        description: "sdfasdfaw"
    }
    return (<Grid
        h="60vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
          <GridItem></GridItem>
          <AspectRatio ratio={3 / 4} d="flex" justifyContent="end">
            <Image src={product.imageUrl} />
          </AspectRatio>
      
        <GridItem>
          <div>
            <h1>Detail for {product.name}</h1>
            <p>ID: {product.id}</p>
            <p>Price : {product.price}</p>
            <p>Description : {product.description}</p>
          </div>
          <Button>Add to Cart</Button>
          <Button>Buy</Button>
        </GridItem>
        <GridItem></GridItem>
      </Grid>
    );
}



export default ProductDetail;