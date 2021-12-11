import { Flex, Center, VStack, Text, Heading } from "@chakra-ui/react";
import { Input, Button } from "../components/Form";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import Link from "next/link";
const signin = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
    password: "",
  };
  const submitHandler = async (values) => {
    console.log(values);
    router.push("/dashboard");
  };
  return (
    <Flex minH="100vh" justifyContent="center">
      <Center my={4}>
        <VStack spacing={8} shadow="xl" p={10}>
          <Formik
            className="w-full"
            initialValues={initialValues}
            onSubmit={submitHandler}
          >
            <Form className="w-full">
              <VStack spacing={8}>
                <Heading size="md">Welcome to signin page</Heading>
                <Input name="email" placeholder="Your email" />
                <Input name="password" placeholder="Your password" />
              </VStack>
              <Button label="Signin" type="submit" my={3} />
              <Text>
                If you have an account,{" "}
                <Link href="/signup"> click here to signup</Link>
              </Text>
            </Form>
          </Formik>
        </VStack>
      </Center>
    </Flex>
  );
};
export default signin;
