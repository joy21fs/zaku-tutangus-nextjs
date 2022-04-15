import styles from "../../../../styles/Transportation.module.css";

export default function TransferButton(props) {
  return (
    <button
      type="button"
      id={props.id}
      className={`${styles[props.id + "-btn"]} 
      ${styles["transportation-icon"]}
       ${styles["option-btn"]}`}
      onClick={(event) => props.handleClick(event)}
    >
      <span className="sr-only">{props.id}</span>
    </button>
  );
}
