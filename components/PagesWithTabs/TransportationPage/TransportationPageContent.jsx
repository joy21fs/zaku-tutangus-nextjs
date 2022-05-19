import styles_u from "../../../styles/contentPages.module.css";
import styles from "../../../styles/Transportation.module.css";
import PublicTransportation from "./PublicTransportation/Lv0_PublicTransportation";
import SelfOrShuttle from "./SelfOrShuttle";
import Image from "next/image";

function TransportationPageContent(props) {
  const { content } = props.page;

  return content.map((content) => (
    <div
      key={content.id}
      id={content.id}
      className={`${styles[props.pageName]} ${
        styles_u["content-container"]
      } content-container flex`}
    >
      <h1>{content.subtitle}</h1>
      {content.id === "public-transportation" ? (
        <PublicTransportation info={content.info} album={props.album} />
      ) : content.id === "by-self" || content.id === "shuttle-bus" ? (
        <SelfOrShuttle info={content} album={props.album} />
      ) : (
        <>
          <Image
            id={content.id}
            alt="site-map"
            src={props.album[content.image]}
            objectFit="contain"
            style={{ cursor: "zoom-in" }}
            onClick={(event) =>
              document
                .querySelector(`.toggle--${event.target.id}`)
                .classList.toggle("expand")
            }
          />
          <div style={{ padding: "5rem" }} />
        </>
      )}
    </div>
  ));
}

export default TransportationPageContent;
