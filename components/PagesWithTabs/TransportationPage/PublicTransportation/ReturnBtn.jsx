import styles from "../../../../styles/Transportation.module.css";

export default function ReturnBtn(props) {
  return (
    <button className={`${styles["return-btn"]}`} onClick={props.handleClick}>
      <span className="sr-only">Return</span>
    </button>
  );
}
