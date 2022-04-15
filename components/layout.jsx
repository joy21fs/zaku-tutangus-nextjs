import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import BackgroundBack from "./Background/BackgroundBack";
import BackgroundFront from "./Background/BackgroundFront";
import Nav from "./MainNav/Nav";
import styles_Home from "../styles/Home.module.css";
import styles_u from "../styles/contentPages.module.css";
import styles_t from "../styles/pagesWithTabs.module.css";
import getImages from "../lib/GetImages";
const ToggleInfo = dynamic(() =>
  import("./PagesWithTabs/TransportationPage/ToggleInfo")
);

export default function Layout({ children }) {
  const router = useRouter();

  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  const mainNav = () => {
    if (router.pathname === "/") {
      if (value < 848) {
        return <Nav />;
      }
    } else {
      return <Nav />;
    }
  };

  const images = getImages();

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <title>Zaku Tutangus布農原森音樂祭</title>
        {router.pathname !== "/" && (
          <>
            <link defer href="/fonts/OradanoGSRR.ttf" crossOrigin="" />
            <link defer href="/fonts//NotoSansTC-Light.woff2" crossOrigin="" />
            <link defer href="/fonts//NotoSansTC-Medium.woff2" crossOrigin="" />
          </>
        )}
      </Head>
      <BackgroundBack />

      <div
        className={`wrapper grid ${
          router.pathname !== "/" && styles_u["wrapper"]
        }
      ${
        router.pathname === "/about" || router.pathname === "/transportation"
          ? styles_t["wrapper--page-with-tabs"]
          : router.pathname === "/" &&
            styles_Home["wrapper--homepage"] + " wrapper--homepage"
      }`}
      >
        {router.pathname !== "/" && (
          <div className={`${styles_u["content-layer"]}`} />
        )}
        {children}
      </div>

      <BackgroundFront />
      {mainNav()}
      {router.pathname === "/transportation" && <ToggleInfo album={images} />}
    </>
  );
}
