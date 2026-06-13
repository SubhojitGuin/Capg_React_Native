import React from 'react'
import NavbarComponent from './components/NavbarComponent'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {

  return (
    <div className="app-container container-fluid bg-primary-subtle pt-2">
      <NavbarComponent />
      <main className="container-fluid my-4">
        <Outlet /> 
      </main>
    </div>
  )
}
