import { FormControl, Button } from "@chakra-ui/react";

function FormButton({ label, ...restProps }) {
  return (
    <FormControl>
      <Button w="full" {...restProps}>
        {label}
      </Button>
    </FormControl>
  );
}

export default FormButton;
