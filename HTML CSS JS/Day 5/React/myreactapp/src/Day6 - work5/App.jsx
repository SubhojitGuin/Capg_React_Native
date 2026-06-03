import React from 'react'
import ChildToApp from './ChildToApp'

export default function App() {

  const [fromChild, setFromChild] = React.useState("");
  function handleDataFromChild(data) {
    setFromChild(data);
  }

  return (
    <div style={{backgroundColor:'lightgreen', border:'1px solid black', padding:'20px'}}>
      <ChildToApp handleDataFromChild={handleDataFromChild} />
      <h1>Data from child is: {fromChild}</h1>
    </div>
  )
}
