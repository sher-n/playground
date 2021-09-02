import { Box, Flex, Grid } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";
import Button3 from "../button/button3";
import LocalStorage from "../../service/LocalStorage";
import React, { useState, useEffect } from "react";
import axios from "../../config/axios";

const NavbarUser = (props) => {
  const [storePath,setStorePath] = useState(0);

  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/store", {}).then((res) => {
      console.log("res===>",res.data.length)
      setStorePath(res.data.length)
      return;
      
    }).catch(e => console.log(e));
  });

  const user = {
    name: "Sher",
  };

  const logout = () => {
    LocalStorage.removeToken();
    props.setRole("guest");
  };
  return (
    <div>
      <Box
        display="flex"
        bg="#FDF8E7"
        w="100%"
        p={1}
        color="white"
        flexShrink="-moz-initial"
      >
        <Flex bg="#FDF8E7" w="50%" p={1} justifyContent="flex-start">
          <Link to="/">
            <Box
              borderRadius="md"
              bg="#FDF8E7"
              color="black"
              px={4}
              h={12}
              fontSize={30}
              position="absolute"
            >
              Shop & Chill
            </Box>
          </Link>
        </Flex>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Box />

          <Link to="/profile">
            <Button3
              variant="link"
              bg="#FDF8E7"
              color="black"
              value={"Welcome, " + user.name}
            />
          </Link>

          {storePath ? (
            <Link to="/mystore">
              <Button2 value="MY STORE" />
            </Link>
          ) : (
            <Link to="/emptystore">
              <Button2 value="MY STORE" />
            </Link>
          )}
          <Button2 onClick={logout} value="LOGOUT" />
        </Grid>
      </Box>
    </div>
  );
};

export default NavbarUser;
