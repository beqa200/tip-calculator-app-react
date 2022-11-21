import React from "react";
import { Buttons } from "./styles/Buttons.Styled";
function Button(props) {
  const ButtonArr = ["5%", "10%", "15%", "25%", "50%"];

  console.log(props.isInput);
  return (
    <Buttons>
      <p>Select Tip %</p>
      <div>
        {ButtonArr.map((percent1) => (
          <button
            className={
              props.percent + "%" == percent1 ? "isActive" : "isNotActive"
            }
            key={parseInt(percent1)}
            value={parseInt(percent1)}
            onClick={(e) => {
              props.setPercent(e.target.value);
              props.setInput(false);
              props.setActivation(true);
            }}
          >
            {percent1}
          </button>
        ))}
        <input
          value={props.percent}
          style={
            props.isInput == true
              ? { border: "2px solid #26C2AE" }
              : { border: "2px solid #F3F9FA" }
          }
          type="number"
          placeholder="Custom"
          onClick={(e) => {
            props.setPercent(e.target.value);
            props.setInput(true);
          }}
          onChange={(e) => {
            props.setPercent(e.target.value);
            props.setActivation(true);
          }}
        />
      </div>
    </Buttons>
  );
}

export default Button;
