import { useState, useEffect } from "react";
import Image from "next/image";
import styles_u from "../../../styles/contentPages.module.css";
import styles_t from "../../../styles/pagesWithTabs.module.css";

export default function AboutPageContent(props) {
  const [value, setValue] = useState(
    useEffect(() => {
      setValue(window.innerWidth);
    }, [])
  );

  return props.page.content.map((content, index) => (
    <div
      key={content.id}
      id={content.id}
      className={`${props.pageName} ${styles_u["content-container"]} ${
        styles_t["content-container"]
      } content-container flex ${value > 848 && "flow"}`}
    >
      <h1>{content.subtitle}</h1>
      <div className="flow">
        {content.id === "tickets" && (
          <h2>
            {content.header}
            <a
              href={content.ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles_t["external-link"]}`}
            >
              點我
            </a>
          </h2>
        )}
        <Image
          priority
          src={
            index === 0
              ? props.album["布農音樂祭__台東縣政府0408.webp"]
              : index === 1
              ? props.album["ticket_info.png"]
              : props.album["節目流程.jpg"]
          }
          alt={content.subTitle}
        />

        {content.info.map((option, index) =>
          content.id !== "tickets" ? (
            <p key={index}>{option}</p>
          ) : (
            <div className={`${styles_t["option"]}`}>
              <h2>{option.header}</h2>
              {option.setOption !== 0 ? (
                <p>{option.body}</p>
              ) : (
                <ol>
                  {option.body.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}
            </div>
          )
        )}
      </div>
    </div>
  ));
}
