import { Flex, Container, VStack } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/SideBar";

function Layout({ children }) {
  return (
    <Flex h="screen" position="relative" display={["none", "flex"]}>
      <Container h="100%" maxW="xs">
        <SideBar />
      </Container>
      <VStack className="container px-2 flex-1">
        <NavBar /> {children}
      </VStack>
    </Flex>
  );
}

export default Layout;
