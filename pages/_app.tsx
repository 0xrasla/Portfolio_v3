import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { style } from "../config/style";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={style}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
