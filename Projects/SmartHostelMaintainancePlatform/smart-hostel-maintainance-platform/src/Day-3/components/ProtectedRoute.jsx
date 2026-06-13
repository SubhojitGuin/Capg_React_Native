import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children }) {

  const { isAuthenticated } = useAuthContext();

  return (
    isAuthenticated ? children : <Navigate to="/login" replace />
  )
}
