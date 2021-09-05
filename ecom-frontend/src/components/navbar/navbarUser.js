import { Box, Flex, Grid, Button } from "@chakra-ui/react";
import Button2 from "../button/button2";
import { Link } from "react-router-dom";
import Button3 from "../button/button3";
import LocalStorage from "../../service/LocalStorage";
import React, { useState, useEffect } from "react";
import axios from "../../config/axios";
import "./styles.css";

const NavbarUser = (props) => {
  const [storeURLPath,setStoreURLPath] = useState(0);
const [user, setUser] = useState([]);
const [toggleBar, setToggleBar] = useState(false)

useEffect(() => {
  // Update the document title using the browser API
  axios.get("/users", {}).then((res) => {
    console.log("user===>",res.data)
    setUser(res.data[0]);
    return;
    
  }).catch(e => console.log(e));
  
  axios.get("/store", {}).then((res) => {
    console.log("amount product===>",res.data.length)
    setStoreURLPath(res.data.length);
    return;
    
  }).catch(e => console.log(e));
},[]);


  const logout = () => {
    LocalStorage.removeToken();
    props.setRole("guest");
  };
  return (
  
    <nav className="navbar" >
        <div className="brand-title">Shop & Chill</div>
        <a href="#" className="toggle-button" onClick={() => setToggleBar(!toggleBar)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        
        {toggleBar? (<Box bg="#243C49"  border="50px" borderColor="gray.200" padding="2" color="white" display="flex" justifyContent="center" w="100%"><Link to="/profile">MY PROFILE</Link></Box>) : ""}
        {toggleBar? (<Box bg="#243C49"  border="50px" borderColor="gray.200" padding="2" color="white" display="flex" justifyContent="center" w="100%"><Link to="/mystore">MY STORE</Link></Box>) : ""}
        {toggleBar? (<Box bg="#243C49"  border="50px" borderColor="gray.200" padding="2" color="white" display="flex" justifyContent="center" w="100%"><Link to="/cart">MY CART</Link></Box>) : ""}
        {toggleBar? (<Box bg="#243C49"  border="50px" borderColor="gray.200" padding="2" color="white" display="flex" justifyContent="center" w="100%"><Button variant="link" onClick={logout}>
    LOGOUT
  </Button>
</Box>) : ""}
        
        
        
        <div className="navbar-links">
        <Link to="/profile">
        <Button3
              variant="link"
              bg="#FDF8E7"
              color="black"
              value={"Welcome, " + user.username}
            />
          </Link>

          {storeURLPath > 0 ? (<Button2 to="/mystore" value="MY STORE" />
          ) : (<Button2 to="/emptystore" value="MY STORE" />
          )}
          <Button2 to="/cart" value="MY CART" />
          <Button2 onClick={logout} value="LOGOUT" />
        </div>
      </nav>
  );
};

export default NavbarUser;
