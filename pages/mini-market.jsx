import Image from "next/image";
import { useRouter } from "next/router";
import styles_u from "../styles/contentPages.module.css";
import { motion } from "framer-motion";
import data_miniMarket from "../src/data_miniMarket";
import getImages from "../lib/GetImages";

export default function FirstPost({ data }) {
  const router = useRouter();
  const images = getImages();
  const info = data.content;

  return (
    <motion.main
      className={`${styles_u["main"]} main mini-market`}
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {info.map((info) => (
        <div
          key={info.vendor}
          className={`flex ${styles_u["content-container"]} `}
        >
          <h1 className="ff-body" style={{ fontWeight: 500 }}>
            {info.vendor}
          </h1>
          {info.imageURLs.map((imageURL, index) => (
            <Image
              key={index}
              src={images[imageURL]}
              alt={info.vendor + index}
            />
          ))}
          {info.intro.map((intro, index) => (
            <p key={index}>{intro}</p>
          ))}
        </div>
      ))}
    </motion.main>
  );
}

export async function getStaticProps() {
  const data = data_miniMarket[0];
  return {
    props: {
      data,
    },
  };
}
