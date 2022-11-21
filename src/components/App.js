import React from "react";
import { Calculator } from "./styles/App.Styled";
import Bill from "./BillInput";
import Button from "./Buttons";
import { useState } from "react";
import People from "./PeopleInput";
import Results from "./Results";
function App() {
  const [bill, setBill] = useState();
  const [percent, setPercent] = useState();
  const [person, setPerson] = useState();
  const [resetActivate, setResetActivate] = useState(false);
  const [isInput, setInput] = useState(false);
  const [activation, setActivation] = useState(false);
  const tipAmount = "$" + ((bill * (percent / 100)) / person).toFixed(2);
  const totalAmount =
    "$" + (+bill / person + +tipAmount.slice(1, tipAmount.length)).toFixed(2);
  console.log(activation);
  return (
    <Calculator>
      <div>
        <Bill bill={bill} setBill={setBill} setActivation={setActivation} />
        <Button
          percent={percent}
          setPercent={setPercent}
          isInput={isInput}
          setInput={setInput}
          setActivation={setActivation}
        />
        <People
          person={person}
          setPerson={setPerson}
          bill={bill}
          percent={percent}
          setActivation={setActivation}
        />
      </div>

      <Results
        setInput={setInput}
        tipAmount={tipAmount}
        totalAmount={totalAmount}
        person={person}
        setPerson={setPerson}
        bill={bill}
        setBill={setBill}
        percent={percent}
        setPercent={setPercent}
        resetActivate={resetActivate}
        setResetActivate={setResetActivate}
        setActivation={setActivation}
        activation={activation}
      />
    </Calculator>
  );
}

export default App;
