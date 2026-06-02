import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("red");

  return (
    <div style={{ 
      backgroundColor: color, 
      minHeight: "10vh",
      padding: "20px"
    }}>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}
