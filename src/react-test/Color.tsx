import React from "react";
import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("색상변경");

  const newBtnColor = () => {
    color === "red" ? setColor("blue") : setColor("red");
    text === "색상변경" ? setText("변경완료") : setText("색상변경");
  };

  return (
    <>
      <button onClick={newBtnColor} style={{ backgroundColor: color }}>
        {text}
      </button>
    </>
  );
};

export default Color;
