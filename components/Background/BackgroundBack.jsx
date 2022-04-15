import styles from "../../styles/background.module.css";
import Image from "next/image";

export default function BackgroundBack() {
  return (
    <div className={styles["background-layer"]}>
      <Image
        priority
        className={styles.sky}
        src="/images/background/background1.png"
        alt="sky"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
