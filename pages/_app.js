import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import "../styles/globals.css";
import "../styles/fonts.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      document
        .querySelector("body")
        .style.setProperty("--vh", window.innerHeight / 100 + "px");
    });
  }, []);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
