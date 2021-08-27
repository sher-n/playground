import { Box , Flex } from "@chakra-ui/react";

const Button2 = (props) => {
    return (
        <Box as="button" borderRadius="xl" bg="teal" color="white" px={8} h={14} marginRight={6} fontSize={20}>
  {props.value}
</Box>
    )
}

export default Button2;