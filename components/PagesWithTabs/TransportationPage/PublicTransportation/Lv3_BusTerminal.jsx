import Image from "next/image";
import styles from "../../../../styles/Transportation.module.css";
import HeadToLine from "./HeadToLine";

export default function BusTerminal(props) {
  const bus = props.info;
  const { busTerminal } = bus;

  return (
    <div
      className={`flex ${styles["container"]} ${styles["container--busTerminal"]} ${styles["container--option"]}`}
    >
      <HeadToLine />
      <h5 className={`${styles["bus-terminal"]} ${styles["subheader"]}`}>
        {busTerminal}
      </h5>
      <div className={`${styles["transportation-icon"]}`}>
        <Image
          className={`${styles["transportation-icon"]}`}
          src={props.album["bus_icon.png"]}
          alt="bus icon"
          width={199}
          height={151}
        />
      </div>
    </div>
  );
}
