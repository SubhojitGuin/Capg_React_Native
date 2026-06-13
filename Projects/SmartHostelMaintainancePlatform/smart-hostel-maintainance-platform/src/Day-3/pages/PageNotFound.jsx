import React from 'react'
import NavbarComponent from '../components/NavbarComponent'

export default function PageNotFound() {
  return (
    <div className="text-center">
      <NavbarComponent />
      <div className="my-5">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="fw-bold text-dark">Page Not Found</h2>
        <p className="text-muted">The page you are looking for does not exist.</p>
      </div>
    </div>
  )
}
