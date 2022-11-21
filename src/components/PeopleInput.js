import React from "react";
import { Inputs } from "./styles/Inputs.Styled";
import personIcon from "../images/icon-person.svg";
function People(props) {
  return (
    <Inputs>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          width: "103%",
        }}
      >
        <p style={{ marginTop: "32px" }}>Number of People</p>
        <p
          className="validation"
          style={
            props.person == null || props.person == 0
              ? { display: "initial", color: "#E17457" }
              : { display: "none" }
          }
        >
          Can’t be zero
        </p>
      </div>

      <input
        value={props.person}
        style={
          props.person == null || props.person == 0
            ? { border: "2px solid red" }
            : { border: "2px solid #F3F9FA" }
        }
        type="number"
        placeholder="0"
        onChange={(e) => {
          props.setPerson(e.target.value);
          props.setActivation(true);
        }}
      />
      <img src={personIcon} />
    </Inputs>
  );
}

export default People;
