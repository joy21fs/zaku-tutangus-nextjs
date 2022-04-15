import Image from "next/image";
import styles from "../../../../styles/Transportation.module.css";

function ShuttleBus(props) {
  const shuttleBus = props.info;
  return (
    <div
      className={`${styles["container"]} ${styles["container--shuttle-bus"]} ${styles["container--option"]} flex`}
    >
      <span className={`${styles["line"]} line3`} />
      <div
        className={`${styles["transportation-icon"]} ${styles["shuttle-bus"]}`}
      >
        <Image
          className={`${styles["transportation-icon"]} ${styles["shuttle-bus"]}`}
          src={props.album["shuttlebus_icon.png"]}
          alt="shuttle-bus icon"
          width={124}
          height={120}
        />
      </div>
      <h5 className={`${styles["shuttle-bus-header"]}`}>{shuttleBus.header}</h5>

      <p className={`${styles["route-instruction"]} ${styles["shuttle-bus"]}`}>
        {shuttleBus.instruction}
      </p>
    </div>
  );
}

export default ShuttleBus;
