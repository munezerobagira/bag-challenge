import { Flex, Center, VStack, Text, Heading } from "@chakra-ui/react";
import { Input, Button } from "../components/Form";
import Link from "next/link";
import { userSchema } from "../util/validation";
const signin = () => {
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
        <Heading size="lg">
          Welcome to signin page, please enter credentials to proceed
        </Heading>
      </Center>
    </Flex>
  );
};
export default signin;
