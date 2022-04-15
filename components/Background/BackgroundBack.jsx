import { motion } from "framer-motion";
import styles from "../../styles/background.module.css";
import Image from "next/image";

export default function BackgroundBack() {
  return (
    <div className={styles["background-layer"]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 4, ease: "linear" },
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        <Image
          className={styles.sky}
          src="/images/background/background1.png"
          alt="sky"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
}
