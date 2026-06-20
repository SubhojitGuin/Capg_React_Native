import './App.css';
import { useState } from 'react';
import EmployeeCard from './EmployeeCard';
 
function App() {
 
  const [employee, setEmployee] = useState({name: "Subhojit", role: "Developer", department: "IT", location: "Bangalore"});
 
  return (
    <div class="App">
      <EmployeeCard employee={employee} />
    </div>
  );
}
 
export default App;