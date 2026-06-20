import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';

export default function App() {

  const [status, setStatus] = useState(true);
  const navigate = useNavigate();

  function handleLogin() {
    if (!status) {
      navigate('/login');
    } else {
      navigate('/dashboard');
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* {
        status ? <Dashboard /> : <Login />
      } */}
    </div>
  )
}
