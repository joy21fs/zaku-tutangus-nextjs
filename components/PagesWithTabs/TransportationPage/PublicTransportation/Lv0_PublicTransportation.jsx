import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "../../../../styles/Transportation.module.css";
import Train from "./Lv1_Train";
const Transfer = dynamic(() => import("./Lv2_Transfer"));

function PublicTransportation(props) {
  const info = props.info;
  const routes = info.instructions;
  const [route, setRoute] = useState(routes); //[]

  function showOption(event) {
    // const trains = document.getElementsByClassName("train-station-btn");
    // event.target.setAttribute("data-isclicked", true);

    // const addAnimation = new Promise((resolve, reject) => {
    //   [...trains].forEach((train) => train.classList.add("smooth-transit"));
    //   resolve(console.log("success"));
    // });

    // addAnimation
    //   .then(
    //     setTimeout(() => {
    setRoute((prevRoute) => {
      return prevRoute.filter((prevRoute) => {
        return prevRoute.id === event.target.id;
      });
    });
    //   }, 850)
    // )
    // .then(
    //   document.querySelector(".container--btn-option").classList.add("show")
    // );
  }

  function backToTop() {
    setRoute(routes);
  }

  return (
    <div
      className={`flex ${styles["container"]} ${styles["container--route"]}`}
    >
      <div
        className={`${styles["container"]} ${styles["container--route-header"]}
        container--route-header flex`}
      >
        <div className={`${styles["transportation-icon"]} ${styles["train"]}`}>
          <Image
            id="train"
            className={`${styles["transportation-icon"]} ${styles["train"]}`}
            src={props.album["train_icon.png"]}
            alt="train icon"
            onClick={backToTop}
            style={{ cursor: "pointer" }}
            width={167}
            height={165}
          />
        </div>
        <h2 className={`${styles["transportation-header"]}`}>
          {info.mainHeader}
        </h2>
      </div>

      <Train info={route} handleClick={showOption} />
      {route.length === 1 && <Transfer info={route[0]} album={props.album} />}
    </div>
  );
}

export default PublicTransportation;
