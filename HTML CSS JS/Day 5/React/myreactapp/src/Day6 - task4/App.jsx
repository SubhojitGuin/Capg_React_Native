import './App.css';
import { useState } from 'react';
import BankDashboard from './BankDashboard';
 
function App() {
  const bankDetails = {
    bankName: "Secure Bank",
    welcomeMessage: "Welcome to Secure Bank"
  }
 
  const account = {
    holder: "Rahul Verma",
    number: "1234 5678 9012",
    type: "Savings",
    balance: "45,680.00"
  }

  return (
    <div className="App">
      <BankDashboard account={account} bankDetails={bankDetails}/>
    </div>
  );
}
 
export default App;