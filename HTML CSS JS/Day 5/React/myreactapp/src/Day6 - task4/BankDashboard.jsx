import React from 'react'
import AccountSummary from './AccountSummary'
import { House, Phone, User } from 'lucide-react';

export default function BankDashboard({ account, bankDetails }) {
  return (
    <div className="bank-dashboard">
      <div className="header">
        <div className="logo-title">
          <img className="logo" src="bank.png" alt="bank" />
          <h1>{bankDetails.bankName}</h1>
        </div>
        <ul>
          <li><House size={20}/> <span>Home</span></li>
          <li><User size={20}/> <span>Accounts</span></li> 
          <li><Phone size={20}/> Contact</li>
        </ul>
      </div>
      <div className="welcome-message">
        <div className="welcome-logo" >
          <img src="bank.png" alt="bank" />
        </div>
        <div>
          <h2>{bankDetails.welcomeMessage}</h2>
          <p>We are here to serve you better!</p>
        </div>
      </div>
      <AccountSummary account={account} />
    </div>
  )
}
