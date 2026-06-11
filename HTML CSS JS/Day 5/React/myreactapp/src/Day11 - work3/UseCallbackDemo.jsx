import React, { useCallback, useMemo } from 'react'
import DummyChild from './DummyChild';

export default function UseCallbackDemo() {

  const [add, setAdd] = React.useState(0);
  const [count, setCount] = React.useState(100);

  // const someFunction = () => { // this function is recreated on every render, so it will cause DummyChild to re-render every time
  //   console.log("someFunction called");
  // }

  const someFunction = useCallback(() => { // this function is memoized, so it will not cause DummyChild to re-render unless add changes
    console.log("someFunction called");
  }, [add]);

  // const someFunction = useMemo(() => { // this function's result is memoized, so it will not cause DummyChild to re-render unless add changes
  //   console.log("someFunction called");
  // }, [add]);

  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <DummyChild someFunction={someFunction} add={add} />
      <p>Add: {add}</p>
      <button onClick={() => setAdd(cnt => cnt + 1)}>Add</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(cnt => cnt + 1)}>Count</button>
    </div>
  )
}

// The useCallback hook is used to memoize a function. It takes two arguments: a function and an array of dependencies. The function is only re-created when one of the dependencies changes. In this example, the someFunction function is only re-created when the add state variable changes. If the add state variable does not change, the someFunction function will return the memoized function from the previous render, which can improve performance by avoiding unnecessary re-renders of the DummyChild component.