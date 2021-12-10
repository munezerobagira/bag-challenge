import { Flex, Center, VStack, Text, Heading } from "@chakra-ui/react";
import { Input, Button } from "../components/Form";
import Link from "next/link";
import { userSchema } from "../util/validation";
import { Formik, Form } from "formik";
const signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    dob: "",
  };
  const submitHandler = async (values) => {
    console.log(values);
  };
  return (
    <Flex h="100vh" justifyContent="center">
      <Center>
        <VStack spacing={8}>
          <Heading size="md" shadow="xl" padding={12}>
            Welcome to signin page, please enter credentials to proceed
          </Heading>
        </VStack>
      </Center>
    </Flex>
  );
};
export default signup;
