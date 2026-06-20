import React from 'react'
import { useAuthContext } from './AuthContext'

export default function LoginStatus() {
  const { isLoggedIn } = useAuthContext();

  function getLoginText(isLoggedIn) {
    return (isLoggedIn) ? "Logged In" : "Logged out";
  }

  return (
    <div className="login-status">
      <h2>Status: {getLoginText(isLoggedIn)}</h2>
    </div>
  )
}
