import React from 'react'

export default function ChildToApp({ handleDataFromChild }) {
  const [data, setData] = React.useState("Child says Hello to App")

  function handleClick() {
    setData(data);
    handleDataFromChild(data);
  }

  return (
    <div style={{backgroundColor:'lightblue', border:'1px solid black', padding:'20px'}}>
      <h1>Data inside child is {data}</h1>
      <button onClick={handleClick}>Click to send data to parent</button>
    </div>
  )
}
