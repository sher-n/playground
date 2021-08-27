import { Box , Flex, Grid } from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
const Store = (props) => {
    
    return (
        <Box h="90vh" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="teal.200" display="block">
            <Box h="20%" bg="teal.300">Profile</Box>
            <Box h="30%" bg="white" d="flex" justifyContent="center">
                <div>YOU HAVE NO OWN PRODUCT TO SELL.</div>     
            </Box>
            <Box h="30%" bg="white" d="flex" justifyContent="center">
            <Link to="/registerproduct"><Button3 value="ADD PRODUCT TO SELL" /></Link>
            </Box>
        </Box>
        </Box>
    )
}

export default Store;