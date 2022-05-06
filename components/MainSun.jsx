import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import styles_Home from "../styles/Home.module.css";
import styles_Nav from "../styles/mainNav.module.css";
import useWindowWidth from "../lib/useWindowWidth";

export default function MainSun() {
  const router = useRouter();

  const width = useWindowWidth();

  function handleClick() {
    if (router.pathname === "/") {
      document.querySelector(".main--homepage").classList.add("hide");

      if (width < 560) {
        document.querySelector(".man").classList.add("hide");
      }
    } else {
      document.querySelector(".menu-btn").classList.toggle("collapse");
      if (width < 848) {
        if (
          (router.pathname === "/about") |
          (router.pathname === "/transportation")
        ) {
          document.querySelector(".tab-nav").classList.toggle("hide");
        }

        document.querySelector(".main").classList.toggle("hide");
      }
    }

    document.querySelector(".menu").classList.toggle("show");
  }

  return (
    <button
      className={`main-btn ${
        router.pathname === "/"
          ? `home-btn ${styles_Home["home-btn"]}`
          : `menu-btn ${styles_Nav["menu-btn"]}`
      }`}
      onClick={handleClick}
    >
      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "linear" }}
      >
        <div className={`main-sun ${styles_Nav["main-sun"]}`}>
          <Image
            src="/images/main-sun.png"
            alt="zaku"
            width={404}
            height={224}
          />
        </div>
      </motion.div>
    </button>
  );
}
