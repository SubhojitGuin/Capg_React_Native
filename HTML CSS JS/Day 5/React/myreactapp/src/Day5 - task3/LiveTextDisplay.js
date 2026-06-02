import { useState } from "react";

export default function LiveTextDisplay() {
  const [text, setText] = useState("You have not typed anything");

  function updateText(event) {
    if (event.target.value.length === 0) {
      setText("You have not typed anything");
    } else {
      setText(event.target.value);
    }
  }

  return (
    <div>
      <input type="text" onChange={updateText}></input>
      <h2>{text}</h2>
    </div>
  );
}