import { Center, Container } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";

function Layout({ children }) {
  return (
    <Container mx="auto">
      <NavBar />
      {children}
    </Container>
  );
}
export default Layout;
