import React from 'react'

export default function UseMemoDemo() {
  const [add, setAdd] = React.useState(0);
  const [minus, setMinus] = React.useState(100);

  // function multiply() {
  //   console.log("Multiplication function called");
  //   return add * 10;
  // }

  const multiply = React.useMemo(() => {
    console.log("Multiplication function called");
    return add * 10;
  }, [add]);

  return (
    <div>
      <h1>UseMemoDemo</h1>
      <h2>Addition: {add}</h2>
      <button onClick={() => setAdd(cnt => cnt + 1)}>+</button>
      <h2>Subtraction: {minus}</h2>
      <button onClick={() => setMinus(cnt => cnt - 1)}>-</button>
      <h2>Multiplication: {multiply}</h2> {/* Since, the multiply function is now an arrow function, so the brackets are not needed. */}
    </div>
  )
}

// The useMemo hook is used to memoize the result of a function. It takes two arguments: a function and an array of dependencies. The function is only re-evaluated when one of the dependencies changes. In this example, the multiply function is only re-evaluated when the add state variable changes. If the add state variable does not change, the multiply function will return the memoized result from the previous render, which can improve performance by avoiding unnecessary calculations.