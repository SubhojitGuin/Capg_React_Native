// import './App.css';
import { useState } from 'react';
import Child from './Child';
 
function App() {

  const [data, setData] = useState("Hello from App Component");
  const [persons, setPersons] = useState([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ]);

  return (
    <div>
      <h2>I am the App Component</h2>
      <Child data={persons}/>
      {/* {
        persons.map((person, index) => (
          <h3 key={index}>{person.name} is of {person.age} years old.</h3>
        ))
      } */}
    </div>
  );
}
 
export default App;