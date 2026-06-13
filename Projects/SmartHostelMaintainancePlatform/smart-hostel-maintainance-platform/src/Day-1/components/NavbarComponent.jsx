import React from 'react'

export default function NavbarComponent() {

  const role = 'Student'; // this would come from auth context
  
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary rounded-3">
      <div className="container-fluid">
        <div>
          <span className="navbar-brand fw-bold">Smart Hostel Maintainance System</span>
        </div>
        <div>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> 
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link">Dashboard</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Create Request</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Login</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">{role}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
