import React from 'react'
import Counter2 from './Counter2'
 
export default function App() {
    const [initialvalue, setInitialvalue] = React.useState(0);
    const [status, setStatus] = React.useState(true);
 
    return (
        <div style={{backgroundColor:'lightblue', padding:'20px',border:'2px solid black', width:'800px', margin:'20px auto'}}>
            <button onClick={()=>
                setInitialvalue(initialvalue+10)}>increase by 10 So new value ={initialvalue}</button>
            {
                status ? <Counter2 initialvalue={initialvalue}/> : null
            }
            <button onClick={()=>setStatus(!status)}>{status ? 'Remove' : 'Add'} component</button>
        </div>
    )
}