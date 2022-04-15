import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import Nav from "../components/MainNav/Nav";
import MainSun from "../components/MainSun";
import Man from "../components/Man";

export default function Home() {
  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  return (
    <>
      {value > 848 && <Nav />}
      <motion.main
        className={`${styles["main--homepage"]} main--homepage flex`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "linear", duration: 0.5 }}
      >
        <Image
          src="/images/我來領唱__字.png"
          alt="我來領唱"
          width={554}
          height={132}
        />
        <MainSun />
        <Image
          src="/images/布農原森音樂祭 字.png"
          alt="布農原森音樂祭"
          width={554}
          height={146}
        />
      </motion.main>
      {value < 848 && <Man />}
    </>
  );
}
