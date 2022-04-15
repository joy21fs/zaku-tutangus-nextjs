import styles from "../../../../styles/Transportation.module.css";

function Bus(props) {
  const bus = props.info;
  const { busStop, direction, busLines, instruction, busLinks } = bus;
  const route = props.route;

  function toggleInfo(event) {
    document
      .querySelector(`.toggle--${event.target.id}`)
      .classList.add("expand");
  }

  return (
    <div
      className={`${styles["container"]} ${styles["container--option"]} ${styles["bus"]} flex`}
    >
      <h2
        className={`${styles["transportation-subHeader"]} ${styles["bus-stop"]}`}
      >
        {busStop}
      </h2>
      <p
        className={`${styles["instruction"]} ${styles["direction"]} ${styles["instruction--bus"]}`}
      >
        {direction}
      </p>
      <div
        className={`${styles["container"]} ${styles["container--bus-line"]} flex`}
      >
        {busLines.map((busLine) => (
          <p key={busLine} className={`${styles["bus-line"]}`}>
            {busLine}
          </p>
        ))}
      </div>
      <p className={`${styles["instruction"]} ${styles["instruction--bus"]}`}>
        {instruction}
      </p>
      {busLinks.map((busLink, index) =>
        route.id === "route3" && index === 0 ? (
          <a
            className={`${styles["terminal-link"]}`}
            href="https://taitung.biz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {busLink}
          </a>
        ) : (
          <button
            key={busLink}
            id={`${route.id}-link${index + 1}`}
            className={`${styles["transportation-link"]} transportation-link `}
            onClick={(event) => toggleInfo(event)}
            style={{ cursor: "pointer" }}
          >
            {busLink}
          </button>
        )
      )}
    </div>
  );
}

export default Bus;
