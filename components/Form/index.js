export { default as Input } from "./Input";
export { default as Button } from "./Button";
import { Heading } from "@chakra-ui/react";
import { Formik, Form } from "formik";

const FormikForm = ({ children, title = "Fill out this form", restProps }) => {
  return (
    <Formik {...restProps}>
      {(props) => (
        <Form>
          <Heading>{title}</Heading> {children}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
