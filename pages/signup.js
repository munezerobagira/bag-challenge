import { Flex, Center, VStack, Text, Heading } from "@chakra-ui/react";
import { Input, Button } from "../components/Form";
import * as yup from "yup";
import Link from "next/link";
import { Formik, Form } from "formik";
const signup = () => {
  const userSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confrimation for password is required"),

    phoneNumber: yup.date().required("Phone number is required"),
    dob: yup.date().required("Date of birth is required"),
    country: yup.string().required("Country is required"),
  });
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
    country: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const submitHandler = async (values) => {
    console.log(values);
    router.push("/dashboard");
  };
  return (
    <Flex minH="100vh" justifyContent="center">
      <Center my={4}>
        <VStack spacing={8} shadow="xl" p={10}>
          <Heading size="md">Welcome to signup page</Heading>

          <Formik
            initialValues={initialValues}
            className="w-full"
            validationSchema={userSchema}
            onSubmit={submitHandler}
          >
            <Form className="w-full">
              <VStack spacing={8}>
                <Input
                  name="firstName"
                  placeholder="First Name"
                  label="First name"
                />
                <Input
                  name="lastName"
                  placeholder="Last Name"
                  label="Last name"
                />
                <Input
                  name="email"
                  placeholder="example@example.com"
                  label="Email"
                />
                <Input
                  name="password"
                  placeholder="Password"
                  label="Password"
                  type="password"
                />
                <Input
                  name="confirmPassword"
                  placeholder="Confirm password"
                  label="Confirm password"
                  type="password"
                />
                <Input
                  name="dob"
                  placeholder="Date of birth"
                  label="Date of birth"
                  type="date"
                />
                <Input
                  name="phoneNumber"
                  placeholder="0780000000"
                  label="Phone number"
                  type="text"
                />
                <Input
                  name="country"
                  placeholder="Rwanda"
                  label="country"
                  type="text"
                />
              </VStack>
              <Button label="Signup" type="submit" my={3} />
              <Text>
                If you have an account,{" "}
                <Link href="/signin">
                  <a>click here to signin</a>
                </Link>
              </Text>
            </Form>
          </Formik>
        </VStack>
      </Center>
    </Flex>
  );
};
export default signup;
