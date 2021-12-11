import sideBarStyles from "../styles/sideBar.module.css";
import Link from "next/link";
import { Container, VStack } from "@chakra-ui/react";
function SideBar() {
  return (
    <Container position="fixed" maxW="xs">
      <VStack pt={12}>
        <div className="logo py-4 text-left">
          <Link href="/">
            <a className="w-full text-left font-bold text-xl">BAG</a>
          </Link>
        </div>
        <div className="text-sm text-left flex flex-col">
          <Link href="/">
            <a className="py-1">MY LIST</a>
          </Link>
          <Link href="/">
            <a className="py-1">VISTED</a>
          </Link>
          <Link href="/">
            <a className="py-1">TO VISIT</a>
          </Link>
        </div>
      </VStack>
    </Container>
  );
}

export default SideBar;
