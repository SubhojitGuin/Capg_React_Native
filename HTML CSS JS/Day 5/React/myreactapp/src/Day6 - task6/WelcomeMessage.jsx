import React from 'react'
import { useAuthContext } from './AuthContext'

export default function WelcomeMessage() {

  const { username } = useAuthContext();

  return (
    <div class="welcome-message">
      <h2>Welcome, {username}</h2>
    </div>
  )
}
