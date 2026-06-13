import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import getDashboardRoute from '../utils/getDashboardRoute';

export default function HomeRedirect() {
  const { user } = useAuthContext();

  if (!user) {
    return <div className="text-center mt-5">Loading Session...</div>;
  }

  return <Navigate to={getDashboardRoute(user.role)} replace />;
}
