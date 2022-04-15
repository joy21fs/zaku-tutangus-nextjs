import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles_u from "../../styles/contentPages.module.css";
import styles from "../../styles/mainNav.module.css";
import NavLink from "./NavLink";
import data from "../../src/data";
import MainSun from "../MainSun";

export default function Nav() {
  const router = useRouter();

  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  function handleClick() {
    if (this.pathname === router.pathname) {
      if (value < 848) {
        document.querySelector(".main").classList.toggle("hide");
        if (
          (router.pathname === "/about") |
          (router.pathname === "/transportation")
        ) {
          document.querySelector(".tab-nav").classList.toggle("hide");
        }
      }
    } else {
      if (document.querySelector(".current") !== null) {
        document.querySelector(".current").classList.remove("current");
      }
    }
    if (router.pathname !== "/") {
      document.querySelector(".menu-btn").classList.toggle("collapse");
    }

    document.querySelector("nav.menu").classList.toggle("show");
  }

  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      return (images[item.replace("./", "")] = r(item));
    });
    return images;
  }

  const mainNav = () => {
    if (router.pathname !== "/" || value < 848) {
      return `${styles_u["wrapper"]} 
        ${styles["wrapper--menu"]}
        ${styles["wrapper"]}
        wrapper grid`;
    }
  };

  const images = importAll(
    require.context("../../public/images/title", false, /\.png$/)
  );

  return (
    <div className={mainNav()}>
      {router.pathname !== "/" && <MainSun />}

      <nav role="navigation" className={`${styles.menu} menu flex`}>
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "linear" }}
        >
          <ul className="flex">
            {data.map((page) => (
              <NavLink
                pathname={page.pathname}
                key={page.id}
                id={page.id}
                title={page.title}
                navLink={images[page.navLink]}
                handleClick={handleClick}
              />
            ))}
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}
