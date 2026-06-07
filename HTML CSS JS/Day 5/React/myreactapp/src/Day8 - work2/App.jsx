import React from 'react'
import authCheck from './authCheck';
import Dashboard from './Dashboard';

export default function App() {
  const EnhancedDashbaord = authCheck(Dashboard);
  return (
    <div>
      <EnhancedDashbaord isLoggedIn={false} />
    </div>
  )
}
