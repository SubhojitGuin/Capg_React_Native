import React from 'react'

export default function BalanceCard({ holder, number, type, balance }) {
  return (
    <div className="balance-card-group">
      <div className="balance-card">
        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='bank-logo' className='bank-logo' />
        <p>Account Holder</p>
        <h3>{holder}</h3>
      </div>
      <div className="balance-card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhBcuow4gxKeJSsCABITbGRbeAz4X5NMzoA&s' alt='bank-logo' className='bank-logo' />
        <p>Account Number</p>
        <h3>{number}</h3>
      </div>
      <div className="balance-card">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDtSZXYhx3wKY4ESY0pnEWlOT3afhZpmPNkg&s' alt='bank-logo' className='bank-logo' />
        <p>Account Type</p>
        <h3>{type}</h3>
      </div>
      <div className="balance-card">
        <img src='https://static.vecteezy.com/system/resources/previews/033/544/837/non_2x/bank-account-icon-in-illustration-vector.jpg' alt='bank-logo' className='bank-logo' />
        <p>Current Balance</p>
        <h3 className='balance'>₹ {balance}</h3>
      </div>
    </div>
  )
}
