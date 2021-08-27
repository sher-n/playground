import { Box , Flex } from "@chakra-ui/react";

const Button3 = (props) => {
    return (
        <Box as="button" borderRadius="xl" bg="gray.500" color="white" px={12} h={30} fontSize={20}>
  {props.value}
</Box>
    )
}

export default Button3;