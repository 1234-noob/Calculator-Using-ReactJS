import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
const buttonName = [
  "C",
  "1",
  "2",
  "+",
  "3",
  "4",
  "-",
  "5",
  "6",
  "*",
  "7",
  "8",
  "/",
  "=",
  "9",
  "0",
  ".",
];

function App() {
  const [calVal, setCalVal] = useState("");

  let onButtonClick = (e) => {
    if (e.target.value === "C") {
      setCalVal("");
    } else if (e.target.value === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayVal = calVal + e.target.value;
      setCalVal(newDisplayVal);
    }
  };

  return (
    <>
      <div className="container min-h-lvh flex justify-center items-center">
        <div className="calculator w-96 h-fit rounded-md border-2 bg-amber-500">
          <Display displayValue={calVal}></Display>
          <ButtonContainer
            button={buttonName}
            onButtonClick={onButtonClick}
          ></ButtonContainer>
        </div>
      </div>
    </>
  );
}

export default App;
