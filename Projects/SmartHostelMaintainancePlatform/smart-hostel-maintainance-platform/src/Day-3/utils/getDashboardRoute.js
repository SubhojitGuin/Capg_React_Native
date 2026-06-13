const getDashboardRoute = (role) => {
  switch (role) {
    case 'admin':
      return '/admin-dashboard';
    case 'student':
      return '/student-dashboard';
    default:
      return '/login';
  }
}

export default getDashboardRoute;