import React from 'react'
import useAuthContext from '../hooks/useAuthContext';
import { Navigate } from 'react-router-dom';
import getDashboardRoute from '../utils/getDashboardRoute';

export default function RoleGuard({ allowedRoles, children }) {
  const { user } = useAuthContext();

  if (!user || !allowedRoles.includes(user.role)) {
    alert("You don't have permission to access this page.");
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return children;
}

