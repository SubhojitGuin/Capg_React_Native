import React from 'react'
import { loginUser } from '../services/UserService';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function AuthContextProvider({ children }) {

  const [user, setUser] = React.useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  
  const [isAuthenticated, setIsAuthenticated] = React.useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth === 'true';
  });

  const navigate = useNavigate();

  async function login(email, password) {
    return loginUser(email, password)
      .then((user) => {
        console.log('Login successful in Auth Context:', user);
        setUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        return user;
      })
      .catch((error) => {
        console.error('Login error:', error);
        throw error;
      });
  }

  async function logout() {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
