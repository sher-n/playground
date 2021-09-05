import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InputComponent from "../components/input/input";
import NavbarBack from "../components/navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../config/axios";

const RegisterProduct = (props) => {
  const [userDataId, setUserDataId] = useState("");
  const [productname, setProductName] = useState("");
  const [link, setLink] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/users", {}).then((res) => {
      console.log("user===>",res.data)
      setUserDataId(res.data[0].id);
      return;
      
    }).catch(e => console.log(e));
  },[]);

  const addProduct =  () => {
    
      axios.post("/store", {
        product_name: productname,
        link,
        price,
        description,
        category,
        store_id: userDataId
      }).then(res => {
        console.log(res);
        alert(res.data.message);
        props.history.push("/mystore");
      }).catch(e => console.log(e));
  }

  return (
<div><NavbarBack to="/mystore" />
<Flex height="100vh" alignItems="center" justifyContent="center">
<Flex direction="column" background="white" w="max" alignItems="center" p={20} rounded={6} >
<Button w="md" h={65} background="#243C49" colorScheme="linkedin">REGISTER PRODUCT</Button>
      <br />
  <FormControl id="register">
  <InputComponent
            placeholder="productname"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        <br />
        <InputComponent
            placeholder="image URL"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setLink(e.target.value)}
            required
          />
        <br />
        <InputComponent
            placeholder="price"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        <br />
        <InputComponent
            placeholder="CAR or FASHION or SPORT"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setCategory(e.target.value)}
          />
        <br />
        <InputComponent
            placeholder="description"
            variant="filled"
            type="text"
            background="white"
            onChange={(e) => setDescription(e.target.value)}
          />
        <br />
  </FormControl>
  <Button
            onClick={addProduct}
            borderRadius="3xl"
            w="lg"
            bg="#6D4D36"
            colorScheme="orange"
          >
            {" "}
            ADD PRODUCT
          </Button>
</Flex>
</Flex></div>
  );
};

export default RegisterProduct;
