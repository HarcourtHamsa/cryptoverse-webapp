import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";
import SupportBtn from "../components/common/SupportBtn";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Head>
          <title>internotchtrade</title>
        </Head>
        <Script
src="//code.tidio.co/qs1b7yz2ajkiosgdzqstwzuhrqmzzety.js" 
          async
        />
        <Component {...pageProps} />

        {/* <SupportBtn /> */}
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
