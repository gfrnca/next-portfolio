// General
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

// CSS
import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

// Components
import Navbar from "../components/organisms/Navbar/Navbar";
import Footer from "../components/organisms/Footer/Footer";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          transition={{
            duration: 0.75,
          }}
          exit="exitState"
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {},
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>

      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
