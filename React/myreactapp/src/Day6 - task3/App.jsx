import './App.css';
import { useState } from 'react';
import Dashboard from './Dashboard';
 
function App() {

  const appointment = {
    patientName: "Ananya Rao",
    doctorName: "Dr. Mehta",
    department: "Cardiology",
    time: "10:30 AM",
    roomNumber: "205"
  }

  return (
    <div className="App">
      <Dashboard appointment={appointment} />
    </div>
  );
}
 
export default App;