import { Box , Flex, Grid , GridItem} from "@chakra-ui/react";
import Button2 from "../components/button/button2";
import Button3 from "../components/button/button3";
import { Link } from "react-router-dom";
const Profile = (props) => {
    const userData = {
        name: "Sher",
        wallet: 9999,
        email: "xxx@xxx.com"
    }
    return (
        <Box h="90vh" w="100%" bg="gray.300" display="flex" justifyContent="center">
        <Box w="60%" h="100%" bg="teal.200" display="block">
            <Box h="20%" bg="teal.300">Profile</Box>
            <Box h="60%" bg="white">
            <Grid
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={9}
    justifyItems="center" alignSelf="center">
        <Grid templateColumns="repeat(5, 1fr)" gap={4} marginTop={10}>
  <GridItem colSpan={3} h="20" bg="tomato" />
  <GridItem colSpan={1} h="20" bg="papayawhip" />
  <GridItem colSpan={1} h="20" bg="papayawhip" />
</Grid>
                <div>NAME</div>
                <div>{userData.name}</div>
                <Button2 value="EDIT"/>
                <div>WALLET</div>
                <div>{userData.wallet}</div>
                <Button2 value="ADD"/>
                <div>EMAIL</div>
                <div>{userData.wallet}</div>
                <Button2 value="EDIT"/>
                </Grid>
            </Box>
            <Box h="20%" bg="teal.500" d="flex" justifyContent="space-evenly" alignSelf="center">
                    <Link to="/store"><Button3 value="MY STORE" /></Link>
                    <Link to="/"><Button3 value="LOG OUT"/></Link>
            </Box>
        </Box>
        </Box>
    )
}

export default Profile;