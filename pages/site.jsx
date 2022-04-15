import Image from "next/image";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import styles_u from "../styles/contentPages.module.css";
import styles from "../styles/Site.module.css";
import data_site from "../src/data_site";
import getImages from "../lib/GetImages";

export default function Site({ data }) {
  const router = useRouter();

  const images = getImages();

  return (
    <motion.main
      className={`main flex ${styles_u["main"]}
        ${styles["site"]} ${styles_u["site"]} 
        content-container ${styles_u["content-container"]}`}
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      <h1>卡那歳農場</h1>
      <div className={`${styles["site-info"]} flow`}>
        {data.content.map((line, index) => (
          <p key={`info${index}`}>{line}</p>
        ))}
      </div>
      <div className="gallery">
        {data.imageURLs.map((image, index) => (
          <Image
            priority
            key={`image${index}`}
            className={`${styles["site-image"]}`}
            src={images[image]}
            alt="site"
          />
        ))}
      </div>
    </motion.main>
  );
}

export async function getStaticProps() {
  const data = data_site[0];
  return {
    props: {
      data,
    },
  };
}
