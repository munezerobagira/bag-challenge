import Layout from "./Layout";
import "../styles/globals.css";
import { theme } from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} theme={theme} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
