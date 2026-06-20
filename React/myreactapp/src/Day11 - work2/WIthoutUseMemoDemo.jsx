import React from 'react';

export default function WIthoutUseMemoDemo() {
  const [add, setAdd] = React.useState(0);
  const [minus, setMinus] = React.useState(100);

  function multiply() {
    console.log("Multiplication function called");
    return add * 10;
  }

  return (
    <div>
      <h1>UseMemoDemo</h1>
      <h2>Addition: {add}</h2>
      <button onClick={() => setAdd(cnt => cnt + 1)}>+</button>
      <h2>Subtraction: {minus}</h2>
      <button onClick={() => setMinus(cnt => cnt - 1)}>-</button>
      <h2>Multiplication: {multiply()}</h2>
    </div>
  )
}
