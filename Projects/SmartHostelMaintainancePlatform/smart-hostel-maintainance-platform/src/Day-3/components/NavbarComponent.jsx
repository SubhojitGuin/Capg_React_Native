import React from 'react'
import { NavLink } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import getDashboardRoute from '../utils/getDashboardRoute';

export default function NavbarComponent() {

  const { user, isAuthenticated, logout} = useAuthContext();

  const formatRole = (role) => {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
  };
  
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary rounded-3">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold">Smart Hostel Maintainance System</span>
        <div>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> 
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                isAuthenticated && user &&
                <li className="nav-item">
                  <NavLink className="nav-link" to={getDashboardRoute(user?.role)}>Dashboard</NavLink>
                </li>
              }
              {
                isAuthenticated && user?.role === 'student' &&
                <li className="nav-item">
                  <NavLink className="nav-link" to="/create-request">Create Request</NavLink>
                </li>
              }
              <li className="nav-item">
                {
                  isAuthenticated ? (
                    <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
                  ) : (
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  )
                }
              </li>
              <li className="nav-item ms-3 bg-white rounded-3 px-2">
                <span className="nav-link fw-bold text-primary">{isAuthenticated && user &&formatRole(user.role) || 'Guest'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
