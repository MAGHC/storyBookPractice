import React from "react";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

const Color = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("색상변경");
  const [disabled, setDisabled] = useState(false);

  const newBtnColor = () => {
    color === "red" ? setColor("blue") : setColor("red");
    text === "색상변경" ? setText("변경완료") : setText("색상변경");
  };

  return (
    <>
      <button disabled={disabled} onClick={newBtnColor} style={{ backgroundColor: color }}>
        {text}
      </button>
      <input
        defaultChecked={disabled}
        type="checkbox"
        onChange={(e) => {
          setDisabled(e.target.checked);
        }}
      ></input>
    </>
  );
};

export default Color;
