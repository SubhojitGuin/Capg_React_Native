import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {

  const navigate = useNavigate();

  function isAuthenticated() {
    return localStorage.getItem('username') === 'admin' && localStorage.getItem('password') === 'admin123';
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
