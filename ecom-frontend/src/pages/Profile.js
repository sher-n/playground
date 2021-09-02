import { Box , Flex, Grid , GridItem, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Button4 from "../components/button/button4";
import NavbarBack from "../components/navbar/navbarBack";
import { useEffect, useState } from "react";
import axios from "../config/axios";
const Profile = (props) => {
    const [userData, setUserData] = useState({})

    useEffect(() => {
        // Update the document title using the browser API
        axios.get("/profiles", {}).then((res) => {
          console.log("res===>",res.data)
          setUserData(res.data);
          return;
          
        }).catch(e => console.log(e));
      },[]);

    const { id, name, bio, address, balance } = userData;
    return (
        <div><NavbarBack to="/user" />
        <Box h="90vh" w="100%" bg="white" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="white" display="block">
        <Box h="30%" alignSelf="center">
          <br />
          <Box fontSize="xl"><strong>PROFILE</strong></Box>
        </Box>
            <Box h="20%" bg="white" d="flex" justifyContent="center">
                
            <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={9}
    justifyItems="center" alignSelf="center" fontSize="lg">

<Box marginTop={2}><strong>NAME</strong></Box>
                <Box marginTop={2}>
                    <Box>{name}</Box>
                    <Box>______________________</Box>
                </Box>
                <Link to=""><Button borderRadius="xl" w="min" bg="#6D4D36" colorScheme="orange"> EDIT</Button></Link>
                <Box marginTop={2}><strong>WALLET BALANCE</strong></Box>
                <Box marginTop={2}>
                    <Box>{balance}</Box>
                    <Box>______________________</Box>
                </Box>
                <Link to=""><Button borderRadius="xl" w="min" bg="#6D4D36" colorScheme="orange"> ADD</Button></Link>
                <Box marginTop={2}><strong>BIO</strong></Box>
                <Box marginTop={2}>
                    <Box>{bio}</Box>
                    <Box>______________________</Box>
                </Box>
                <Link to="profile"><Button borderRadius="xl" w="min" bg="#6D4D36" colorScheme="orange"> EDIT</Button></Link>
                </Grid>
            </Box>
            <Box h="20%" />
            <Box h="20%" bg="white" d="flex" justifyContent="center" flexWrap="wrap">
            <Link to="/mystore"><Button4 value="MY STORE" /></Link>
            <Link to="/"><Button4 value="LOG OUT" /></Link>
            </Box>
        </Box>
        </Box>
        </div>
    )
}

export default Profile;
