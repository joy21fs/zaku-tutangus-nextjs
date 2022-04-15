import styles_u from "../../../styles/contentPages.module.css";
import styles from "../../../styles/Transportation.module.css";
import PublicTransportation from "./PublicTransportation/Lv0_PublicTransportation";
import SelfOrShuttle from "./SelfOrShuttle";

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
      ) : (
        (content.id === "by-self" || content.id === "shuttle-bus") && (
          <SelfOrShuttle info={content} album={props.album} />
        )
      )}
    </div>
  ));
}

export default TransportationPageContent;
