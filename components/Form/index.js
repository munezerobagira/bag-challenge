export { default as Input } from "./Input";
export { default as Button } from "./Button";

import { Formik, Form } from "formik";

const FormikForm = ({ children, title, restProps }) => {
  return (
    <>
      <Formik {...restProps}>{(props) => <Form> {children}</Form>}</Formik>
    </>
  );
};

export default FormikForm;
