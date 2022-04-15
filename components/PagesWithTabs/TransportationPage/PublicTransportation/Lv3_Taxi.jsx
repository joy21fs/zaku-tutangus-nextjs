import styles from "../../../../styles/Transportation.module.css";

export default function Taxi(props) {
  const route = props.route;
  const taxi = props.info;
  const { instruction, contact } = taxi;

  return (
    <div
      className={`${styles["container"]} ${styles["container--option"]} taxi flow`}
    >
      <p className={`${styles["instruction"]} ${styles["instruction--taxi"]}`}>
        {instruction}
      </p>
      {route.id !== "route3" && (
        <p
          className={`${styles["instruction"]} ${styles["instruction--taxi"]} ${styles["contact"]}`}
        >
          {contact}
        </p>
      )}
    </div>
  );
}
