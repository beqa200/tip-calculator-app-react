import React from "react";
import { Result } from "./styles/Results.styled";
import { useState } from "react";
function Results(props) {
  console.log(props.percent);
  console.log(props.bill);
  console.log(props.person);

  return (
    <Result>
      <div className="tipAmount forFlex">
        <div>
          <h2>Tip Amount</h2>
          <p>/ person</p>
        </div>

        <h1>
          {props.person == 0 ||
          props.person == null ||
          props.percent == null ||
          props.bill == null
            ? "$0.00"
            : props.tipAmount}
        </h1>
      </div>

      <div className="totalAmount forFlex">
        <div>
          <h2>Total</h2>
          <p>/ person</p>
        </div>

        <h1>
          {props.person == 0 ||
          props.person == null ||
          props.percent == null ||
          props.bill == null
            ? "$0.00"
            : props.totalAmount}
        </h1>
      </div>

      <button
        className={props.activation == true ? "isActivate" : "iNotActivate"}
        onClick={() => {
          props.setBill("");
          props.setPercent("");
          props.setPerson("");
          props.setInput(false);
          props.setActivation(false);
        }}
      >
        Reset
      </button>
    </Result>
  );
}

export default Results;
