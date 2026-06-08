import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    localStorage.setItem('username', event.target.username.value);
    localStorage.setItem('password', event.target.password.value);
    alert('Login successful!')
    navigate('/');
  };

  return (
    <div className='container-fluid m-2'>
      <Navbar />
      <form className='m-5' onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div class="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
