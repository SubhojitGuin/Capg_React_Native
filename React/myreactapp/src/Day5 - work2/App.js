import './App.css';
import { useState } from 'react';

function App() {
  const [i, setI] = useState(10);
  const [name, setName] = useState("Subhojit");
  const [age, setAge] = useState(22);
  return (
    <div>
      <h1>Value: {i}</h1>
      <button onClick={() => {setI(i + 10)}}>Increase Value</button>
      <p>{name}</p>
      <button onClick={() => {setName("Capgemini")}}>Change Name</button>
      <p>Age: {age}</p>
      <button onClick={() => {setAge(age + 1)}}>Increase Age</button>
    </div>
  );
}

export default App;
