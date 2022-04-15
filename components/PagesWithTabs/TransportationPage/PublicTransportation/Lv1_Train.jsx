import styles from "../../../../styles/Transportation.module.css";

export default function Train(props) {
  return (
    <div
      className={`flex ${styles["container"]} ${styles["container--train-option"]}`}
    >
      {props.info.map((instruction) => (
        <button
          className={`${styles["train-station-btn"]} ${styles["subheader"]}`}
          key={instruction.id}
          id={instruction.id}
          data-isclicked={false}
          onClick={(event) => props.handleClick(event)}
        >
          {instruction.trainStop}
        </button>
      ))}
    </div>
  );
}
