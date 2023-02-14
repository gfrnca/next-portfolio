// General
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import localFont from "@next/font/local";

// CSS
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

// Components
import Navbar from "../components/organisms/Navbar/Navbar";

// Fonts
const planetKosmos = localFont({ src: "./planet.TTF" });

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
