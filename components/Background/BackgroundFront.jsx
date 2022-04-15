import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/background.module.css";
import Image from "next/image";

export default function BackgroundFront() {
  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  return (
    <div className={styles["background-layer"]}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 2, ease: "linear" },
        }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{ position: "relative", width: "100%", height: "100vh" }}
      >
        {/* <!------------------ left --------------------------> */}

        <Image
          priority
          src="/images/background/branchtree&deer_left.png"
          alt="branch,tree and deer on the left"
          layout="fill"
          objectFit={value < 848 ? "cover" : "contain"}
          objectPosition={value < 560 ? "-2.5rem -1rem" : "left bottom"}
        />

        <Image
          priority
          src="/images/background/bush_left.png"
          alt="bush on the left"
          layout="fill"
          objectFit={value < 848 ? "cover" : "contain"}
          objectPosition={value < 560 ? "-3rem bottom" : "left bottom"}
        />

        {/* <!------------------ right --------------------------> */}

        <Image
          priority
          src="/images/background/bushleaves&topbranch_right.png"
          alt="bush,leaves and top-branch on the right"
          layout="fill"
          objectFit={value < 848 ? "cover" : "contain"}
          objectPosition="right bottom"
        />
        <div
          className={`${styles["img-wrapper"]} ${styles["right-trunk"]} ${styles["right"]}`}
          style={{ position: "relative", width: "100%", height: "100vh" }}
        >
          <Image
            priority
            src="/images/background/trunk&leaves_rb.png"
            alt="trunk and big-leaves on the right"
            layout="fill"
            objectFit={value < 848 ? "cover" : "contain"}
            objectPosition={"right bottom"}
          />
        </div>
      </motion.div>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = await fs.readdir(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8");

    // Generally you would parse/transform the contents
    // For example you can transform markdown to HTML here

    return {
      filename,
      content: fileContents,
    };
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: await Promise.all(posts),
    },
  };
}
