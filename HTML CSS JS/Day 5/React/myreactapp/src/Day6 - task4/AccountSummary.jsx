import React from 'react'
import BalanceCard from './BalanceCard'

export default function AccountSummary({ account}) {
  return (
    <div className="account-summary">
      <h2>Account Summary</h2>
      <BalanceCard
        holder={account.holder}
        number={account.number}
        type={account.type}
        balance={account.balance}
      />
    </div>
  )
}
