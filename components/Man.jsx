import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

export default function Man() {
  return (
    <div className={`${styles.man} man`}>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 2, ease: "linear" },
        }}
      >
        <Image
          priority
          className={`${styles.man}`}
          src="/images/man.png"
          alt="man"
          // width={1440}
          // height={2039}
          layout="fill"
        />
      </motion.div>
    </div>
  );
}
