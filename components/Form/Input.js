import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
function ChakraInput({ label, name, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <FormControl isInvalid={meta.error && meta.touched}>
            <FormLabel htmlFor="name">{label}</FormLabel>
            <Input {...restProps} {...field} />
            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default ChakraInput;
