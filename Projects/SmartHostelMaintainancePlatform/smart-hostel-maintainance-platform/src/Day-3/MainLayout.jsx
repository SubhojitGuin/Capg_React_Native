import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

  return (
    <div className="app-container container-fluid bg-primary-subtle min-vh-100 pt-3">
      <NavbarComponent />
      <main className="container-fluid pb-3">
        <Outlet /> 
      </main>
    </div>
  )
}
