import React from 'react'
import FunctionalComponentLifeCycleDemo from './FunctionalComponentLifeCycleDemo';
 
export default function App() {
    const [initialvalue, setInitialvalue] = React.useState(0);
    const [status, setStatus] = React.useState(true);
 
    return (
        <div style={{backgroundColor:'lightblue', padding:'20px',border:'2px solid black', width:'800px', margin:'20px auto'}}>
            <button onClick={()=>
                setInitialvalue(initialvalue+10)}>increase by 10 So new value ={initialvalue}</button>
            {
                status ? <FunctionalComponentLifeCycleDemo initialvalue={initialvalue}/> : null
            }
            <button onClick={()=>setStatus(!status)}>{status ? 'Remove' : 'Add'} component</button>
        </div>
    )
}