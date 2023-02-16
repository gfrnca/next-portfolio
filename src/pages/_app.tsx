// General
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

// CSS
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

// Components
import Navbar from "../components/organisms/Navbar/Navbar";
import Footer from "../components/organisms/Footer/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
