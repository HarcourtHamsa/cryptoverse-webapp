import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import SupportBtn from "../components/common/SupportBtn";
import { AuthProvider } from "../context/auth";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Head>
          <title>Cryptoverse</title>
        </Head>
        <Component {...pageProps} />

        <SupportBtn />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
