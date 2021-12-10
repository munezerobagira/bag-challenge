import { FormControl } from "@chakra-ui/react";

function Button({ label, ...restProps }) {
  return (
    <FormControl>
      <Button w="full" {...restProps}>
        {label}
      </Button>
    </FormControl>
  );
}

export default Button;
