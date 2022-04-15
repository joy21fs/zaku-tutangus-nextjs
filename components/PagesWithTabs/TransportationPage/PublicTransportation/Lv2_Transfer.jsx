import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "../../../../styles/Transportation.module.css";
import HeadToLine from "./HeadToLine";
import TransferButton from "./Lv2_TransferButton";
const Instruction = dynamic(() => import("./Lv3_Instruction"), { ssr: false });

function Transfer(props) {
  const route = props.info;
  const [option, setOption] = useState(route.options); //[]

  function showContent(event) {
    // const options = document.getElementsByClassName("container--line-btn");
    // console.log(event.target.parentElement);
    // event.target.parentElement.setAttribute("data-isclicked", true);
    // const instructions = document.getElementsByClassName("container--option");

    // const addAnimation = new Promise((resolve, reject) => {
    //   [...options].forEach((option) => option.classList.add("smooth-transit"));
    //   resolve(console.log("success"));
    // });
    // addAnimation
    //   .then(
    //     setTimeout(() => {
    setOption((prevOption) => {
      return prevOption.filter((prevOption) => {
        return prevOption.id === event.target.id;
      });
    });
    //   }, 850)
    // )
    // .then(
    //   [...instructions].forEach((instruction) =>
    //     instruction.classList.add("show")
    //   )
    // );
  }

  function backToLastStep() {
    setOption(route.options);
    document
      .querySelector(".container--route-header")
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div
        className={`flex ${styles["container"]} ${styles["container--btn-option"]}`}
        style={{ flexDirection: "row" }}
      >
        {option.map((option, index) => (
          <div
            key={index}
            className={`flex ${styles["container"]} ${styles["container--line-btn"]}`}
            data-isclicked={false}
          >
            <HeadToLine className={`line${index + 1}`} />
            <TransferButton
              key={option.id}
              id={option.id}
              handleClick={showContent}
              album={props.album}
            />
          </div>
        ))}
      </div>

      <Instruction
        info={option}
        route={route}
        album={props.album}
        handleClick={backToLastStep}
      />
    </>
  );
}

export default Transfer;
