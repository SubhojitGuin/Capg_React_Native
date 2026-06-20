import React from 'react'
import Child from './Child'
export default function Parent() {
    const [count, setCount] = React.useState(0)
    const [localvar, setLocalvar] = React.useState(0)
    return (
        <div className="allchild app">
            <Child count={count} />
            <button onClick={() => setCount(cnt => cnt + 1)}>+</button>
            <h2>Local Variable: {localvar}</h2>
            <button onClick={() => setLocalvar(cnt => cnt + 1)}>+</button>
        </div>
    )
}