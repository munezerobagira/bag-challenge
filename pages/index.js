import {
  Container,
  Center,
  Flex,
  Button,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
  return (
    <Container height="100vh" minH="100vh" maxW="lg" alignItems="center">
      <VStack height="100%" justifyContent="center" spacing={6}>
        <Center>
          <Heading size="md">Welcome , DreamCountry</Heading>
        </Center>
        <HStack>
          <Link href="/signup">
            <a>
              <Button> Signup</Button>
            </a>
          </Link>
          <Link href="/signin">
            <a>
              <Button colorScheme="blue"> Login</Button>
            </a>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};
export default Home;
