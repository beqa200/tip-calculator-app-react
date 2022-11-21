import React from "react";
import { Inputs } from "./styles/Inputs.Styled";
import dollar from "../images/icon-dollar.svg";
function Bill(props) {
  return (
    <Inputs>
      <p>Bill</p>
      <input
        type="number"
        value={props.bill}
        placeholder="0"
        onChange={(e) => {
          props.setBill(e.target.value);
          props.setActivation(true);
        }}
      />
      <img src={dollar} />
    </Inputs>
  );
}

export default Bill;
