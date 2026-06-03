import './App.css';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';
import { useState } from 'react';
import { Counter } from './Counter';
import UserList from './UserList';
 
function App() {
 
  const [i,setI]=useState(10);
  const [person,setPerson]=useState({name:"Ravinder",age:22});
 
  return (
    <div>
      <Counter i={i} color="red"/>
      <Counter i={20} color="blue"/>
      <Counter i={30} color="green"/>
      <UserList person={person}/>
      {/* <p>{i}</p>
      <button onClick={()=>setI(i+10)}>Click Me</button>
      <p>{name}</p>
      <button onClick={()=>setName("Arshveer")}>Click Me to change Name</button>
      <p>{age}</p>
      <button onClick={()=>setAge(age+1)}>Click Me to change age</button>
      <Header/>
      <Hero/>
      <Footer/> */}
    </div>
  );
}
 
export default App;