import Image from "next/image";
import styles from "../../../styles/Transportation.module.css";

export default function ToggleInfo(props) {
  const toggleInfo = [
    {
      id: "route1-link1",
      image: props.album["圖1關山站牌位置圖.jpg"],
    },
    {
      id: "route2-link1",
      image: props.album["圖3鹿野站牌位置.jpg"],
    },
    {
      id: "rental-spots",
      image: props.album["關山租車.png"],
    },

    {
      id: "route1-link2",
      image: props.album["圖2關山到武陵時間表.jpg"],
    },

    {
      id: "route2-link2",
      image: props.album["圖4公車時刻表鹿野到武陵.jpg"],
    },

    {
      id: "route3-link2",
      image: props.album["圖5公車時刻台東到武陵.jpg"],
    },

    {
      id: "drivers-map",
      image: props.album["自行開車路線.jpg"],
    },
    {
      id: "site-map",
      image: props.album["音樂祭地圖.jpg"],
    },
  ];

  function handleClick(event) {
    document.querySelector(".expand").classList.remove("expand");
  }

  return (
    <div className={`${styles["toggle-container"]} toggle-container flex`}>
      {toggleInfo.map((info, index) => (
        <div
          key={info.id}
          className={`toggle--${info.id} ${styles[info.id]}
          ${index <= 2 ? styles["portrait"] : styles["landscape"]}`}
          passHref={true}
        >
          <Image
            src={info.image}
            alt={info.image}
            onClick={(event) => handleClick(event)}
            // width={1181}
            // height={index === 1 ? 910 : 1654}
          />
        </div>
      ))}
    </div>
  );
}
