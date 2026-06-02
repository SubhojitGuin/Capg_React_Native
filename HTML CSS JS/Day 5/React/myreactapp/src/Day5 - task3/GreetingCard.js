import { useState } from "react";

export default function GreetingCard() {
  const [greeting, setGreeting] = useState("Morning");

  return (
    <div>
      <h1>Good {greeting}!</h1>
      <button onClick={() => setGreeting("Morning")}>Morning</button>
      <button onClick={() => setGreeting("Afternoon")}>Afternoon</button>
      <button onClick={() => setGreeting("Evening")}>Evening</button>
    </div>
  );
}