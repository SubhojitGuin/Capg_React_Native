import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <h1>Navigation</h1>
      <ul>
        <NavLink to='/' className='nav-link'>App</NavLink>
        <NavLink to='/home' className='nav-link'>Home</NavLink>
        <NavLink to='/about' className='nav-link'>About</NavLink>
        <NavLink to='/contact' className='nav-link'>Contact</NavLink>
        <NavLink to='/dashboard' className='nav-link'>Dashboard</NavLink>
      </ul>
    </div>
  )
}
