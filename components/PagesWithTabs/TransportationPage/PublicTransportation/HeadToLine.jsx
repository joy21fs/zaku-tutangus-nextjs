import styles from "../../../../styles/Transportation.module.css";

export default function HeadToLine(props) {
  return <span className={`${styles["line"]} ${props.className}`} />;
}
