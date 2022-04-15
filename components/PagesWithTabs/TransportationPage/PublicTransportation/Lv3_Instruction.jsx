import React from "react";
import dynamic from "next/dynamic";
const Taxi = dynamic(() => import("./Lv3_Taxi"));
const Bus = dynamic(() => import("./Lv3_Bus"));
const ShuttleBus = dynamic(() => import("./Lv4_ShuttleBus"));
const BusTerminal = dynamic(() => import("./Lv3_BusTerminal"));
const ReturnBtn = dynamic(() => import("./ReturnBtn"));

function Instruction(props) {
  const option = props.info;
  const route = props.route;

  if (option.length === 1) {
    if (option[0].id === "taxi") {
      return (
        <>
          <Taxi info={option[0].instruction.taxi} route={route} />
          {route.id === "route3" && (
            <>
              {/* <div className="flex container container--busTerminal">
                <HeadToLine />
                <h5 className="bus-terminal subheader">
                  {option[0].instruction.bus.busTerminal}
                </h5>
                <img src={props.album["bus_icon.png"]} alt="bus icon" />
              </div> */}

              <BusTerminal
                info={option[0].instruction.bus}
                album={props.album}
              />
              <Bus
                info={option[0].instruction.bus}
                route={route}
                album={props.album}
              />
              <ShuttleBus
                info={option[0].instruction.shuttleBus}
                album={props.album}
              />
            </>
          )}
          <ReturnBtn handleClick={props.handleClick} />
        </>
      );
    } else {
      return (
        <>
          {route.id === "route3" && (
            <>
              <p className="instruction instruction--bus">
                {option[0].instruction.bus.busAfterTrainInstruction}
              </p>
              <BusTerminal
                info={option[0].instruction.bus}
                album={props.album}
              />
            </>
          )}
          <Bus info={option[0].instruction.bus} route={route} />
          <ShuttleBus
            info={option[0].instruction.shuttleBus}
            album={props.album}
          />
          <ReturnBtn handleClick={props.handleClick} />
        </>
      );
    }
  }
  //   else {
  //     return (
  //       <div style={{ height: 0 }}>
  //         <Taxi info={option[0].instruction} />
  //         <BusTerminal info={option[1].instruction.bus} album={props.album} />
  //         <Bus info={option[1].instruction.bus} route={route} />
  //         <ShuttleBus
  //           info={option[1].instruction.shuttleBus}
  //           album={props.album}
  //         />
  //       </div>
  //     );
  //   }
}

export default Instruction;
