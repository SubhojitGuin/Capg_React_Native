import React from 'react'
 
 function Child({ count }) {
 
  return (
    <div className="allchild child">
      {
        console.log('Child render')
      }
      <p>Child: {count} </p>
    </div>
  )
}
 
export default React.memo(Child)

// React.memo is a higher order component that prevents a component from re-rendering if its props have not changed. It is used to optimize the performance of a component by preventing unnecessary re-renders. In this example, the Child component will only re-render if the count prop changes. If the count prop does not change, the Child component will not re-render, even if the Parent component re-renders.