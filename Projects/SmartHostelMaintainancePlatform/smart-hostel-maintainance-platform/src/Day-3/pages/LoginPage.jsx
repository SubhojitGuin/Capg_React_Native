import React from 'react'
import LoginForm from '../components/LoginForm'
import NavbarComponent from '../components/NavbarComponent'

export default function LoginPage() {
  return (
    <div className="login-page container-fluid bg-primary-subtle pt-3" style={{ minHeight: '100vh' }}>
      <NavbarComponent />
      <LoginForm />
    </div>
  )
}
