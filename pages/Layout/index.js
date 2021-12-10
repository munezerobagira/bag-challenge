import { Center, Container } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NavBar from "../../components/NavBar";
import DashboardLayout from "./Dashboard";
import PageLayout from "./Page";

function Layout({ children }) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      {path.startsWith("/dashboard") ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        <PageLayout>{children}</PageLayout>
      )}
    </>
  );
}
export const getStaticProps = async (ctx) => {
  console.log(ctx);
  return {};
};
export default Layout;
