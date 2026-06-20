import { useState } from "react";

export default function FontSizeController() {
  const [fontSize, setFontSize] = useState(16);

  function increaseFontSize() {
    setFontSize(fontSize + 1);
  }

  function decreaseFontSize() {
    setFontSize(fontSize - 1);
  }

  return (
    <div>
      <button onClick={increaseFontSize}>Increase Font Size</button>
      <button onClick={decreaseFontSize}>Decrease Font Size</button>
      <p style={{ fontSize: `${fontSize}px` }}>This text changes size</p>
    </div>
  );
}