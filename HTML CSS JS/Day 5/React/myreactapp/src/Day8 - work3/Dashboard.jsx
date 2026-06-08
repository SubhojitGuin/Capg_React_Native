import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard(props) {
  return (
    <div>
      <h1>Dashboard {props.isLoggedIn ? ' - Welcome!' : ''}</h1>
      <p>Welcome to the dashboard! Here you can find an overview of your activities and manage your settings.</p>
      <NavLink to='/dashboard/admin'>Admin Dashboard</NavLink> <br />
      <NavLink to='/dashboard/user'>User Dashboard</NavLink> <br />
      <div style={{ border: '1px solid black', padding: '10px', marginTop: '20px' }}>
        <Outlet/> {/* This will render the nested routes (AdminDashboard or UserDashboard) based on the URL */}
      </div>
    </div>
  )
}
