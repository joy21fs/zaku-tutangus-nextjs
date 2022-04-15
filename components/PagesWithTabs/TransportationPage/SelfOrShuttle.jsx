import { useState, useEffect } from "react";
import Image from "next/image";
import styles_u from "../../../styles/contentPages.module.css";
import styles_t from "../../../styles/pagesWithTabs.module.css";
import styles from "../../../styles/Transportation.module.css";

export default function BySelf(props) {
  const info = props.info;

  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  function toggleInfo(event) {
    document
      .querySelector(`.toggle--${event.target.id}`)
      .classList.toggle("expand");
  }

  return (
    <div
      className={`${styles["by-self"]} ${styles["container"]} 
    flex ${value > 848 && "flow"}`}
    >
      <Image
        id="drivers-map"
        src={props.album["自行開車路線.jpg"]}
        alt="map"
        className={`${styles["toggleImg"]}`}
        onClick={(event) => toggleInfo(event)}
        width={1894}
        height={1045}
      />
      {info.id === "by-self" &&
        info.options.map((option, index) => (
          <div
            key={option.option}
            className={`flow ${styles_t.option} ${styles["option-container"]}`}
          >
            {index === 0 ? (
              <h2>
                {option.option}

                <a
                  className={`${styles_t["external-link"]}`}
                  href={option.info}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  網頁連結
                </a>
              </h2>
            ) : (
              <>
                <h2>{option.option}</h2>
                <Image
                  id="rental-spots"
                  className={`${styles["toggleImg"]}`}
                  src={props.album[option.info]}
                  alt={option.option}
                  width={694}
                  height={789}
                  onClick={toggleInfo}
                />
              </>
            )}
          </div>
        ))}
      <ul className={`${styles["remarks"]}`}>
        {info.info.map((remark, index) => (
          <li key={index}>{remark}</li>
        ))}
      </ul>
    </div>
  );
}
