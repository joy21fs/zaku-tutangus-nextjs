import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import styles_u from "../styles/contentPages.module.css";
import data_cast from "../src/data_cast";
import getImages from "../lib/GetImages";

export default function Cast({ data }) {
  const router = useRouter();

  const images = getImages();

  return (
    <motion.main
      className={`main ${styles_u["main"]} flex`}
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {data.content.map((cast) => (
        <div
          key={cast.id}
          className={`cast flex content-container
            ${styles_u["content-container"]} `}
        >
          <Image
            priority
            src={images[cast.image]}
            alt={cast.artist}
            width={674}
            height={455}
          />

          <h1 className="artist-name">{cast.artist}</h1>
          <div className="cast-bio flow">
            {cast.bio.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </motion.main>
  );
}

export async function getStaticProps() {
  const data = data_cast[0];
  return {
    props: {
      data,
    },
  };
}
