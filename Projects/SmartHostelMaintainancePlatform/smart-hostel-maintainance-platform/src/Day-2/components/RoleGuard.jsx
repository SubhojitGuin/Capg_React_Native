import React from 'react'
import { Navigate } from 'react-router-dom';
import getDashboardRoute from '../utils/getDashboardRoute';
import AuthContext from '../context/AuthContext';

export default function RoleGuard({ allowedRoles, children }) {
  const { user } = React.useContext(AuthContext);

  if (!user || !allowedRoles.includes(user.role)) {
    alert("You don't have permission to access this page.");
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return children;
}

