import { Input, Stack } from "@chakra-ui/react";

const InputComponent = (props) => {
  return (
    <Stack spacing={3} w="max">
      <Input
        w="lg"
        onChange={props.onChange}
        placeholder={props.placeholder}
        variant={props.variant}
        mb={props.mb}
        type={props.type}
        bg="#F6F6F6"
        color="#6D4D36"
      />
    </Stack>
  );
};

export default InputComponent;
