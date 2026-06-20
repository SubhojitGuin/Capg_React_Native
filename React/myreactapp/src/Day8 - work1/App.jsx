import React from 'react'

function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

function RedHOC(props) { // props -> Component
  return (
    <div style={{backgroundColor: 'red', padding: '20px'}}> 
      <h2>This is a Higher Order Component</h2>
      <props.cmp />
    </div>
  );
} 

function GreenHOC(props) { // props -> Component
  return (
    <div style={{backgroundColor: 'green', padding: '20px'}}>
      <h2>This is a Higher Order Component</h2>
      <props.cmp />
    </div>
  );
}

function BlueHOC(props) { // props -> Component
  return (
    <div style={{backgroundColor: 'blue', padding: '20px'}}>
      <h2>This is a Higher Order Component</h2>
      <props.cmp />
    </div>
  );
}

function HOC({ Component, color }) { // props -> Component
  return (
    <div style={{backgroundColor: color, padding: '20px'}}>
      <h2>This is a Higher Order Component</h2>
      <Component />
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* <RedHOC cmp={Counter} />
      <GreenHOC cmp={Counter} />
      <BlueHOC cmp={Counter} /> */}
      <HOC color='red' Component={Counter} />
      <HOC color='green' Component={Counter} />
      <HOC color='blue' Component={Counter} />
    </div>
  )
}
