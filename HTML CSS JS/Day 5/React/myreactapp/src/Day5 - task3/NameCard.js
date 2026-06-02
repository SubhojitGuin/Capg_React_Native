import { useState } from "react";

export default function NameCard() {
  const [name, setName] = useState("Guest");

  function updateName() {
    const inputElement = document.getElementById("nameInput");
    setName(inputElement.value);
  }

  return (
    <div>
      <input type="text" id="nameInput" />
      <button onClick={updateName}>Update Name</button>
      <p>Hello, {name}</p>
    </div>
  );
}