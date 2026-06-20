import { useEffect ,useState } from "react";
 
export default function FunctionalComponentLifeCycleDemo() {
    const [count, setCount] = useState(0);
    const [title, setTitle] = useState('Functional Component Life Cycle Demo');
 
    useEffect(() => {
        console.log("Call API or do some side effect here..")
    }, []) // executed only once

    useEffect(() => {
        console.log("This is useEffect...")
    }); // executed every time for all events
 
    useEffect(() => {
        console.log("This is a useEffect for count..")
    },[count])
 
    useEffect(() => {
        console.log("This is a useEffect for title..")
    },[title])
 
    return (
    <div>
        <h1>Functional Component Life Cycle Demo</h1>
        <button onClick={()=>setCount(count+1)}> + </button>
        <h2>Count is {count}</h2>
        <br />
        <button onClick={()=>setCount(count-1)}> - </button>
        <h2>{title}</h2>
        <button onClick={()=>setTitle("New " + title)}>Change Title</button>
    </div>
  )
}