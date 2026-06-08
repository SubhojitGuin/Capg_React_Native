import React from 'react'
import Navbar from './Navbar'
import { NavLink, Outlet } from 'react-router-dom'

export default function ControlRoomLayout() {
  return (
    <div className='container-fluid m-2'>
      <Navbar />
      <h1>Welcome to Control Room!</h1>
      <div className='d-grid gap-2 m-3'>
        <NavLink to='/control-room/active-missions' className='btn btn-outline-success btn-lg'>Active Missions</NavLink>
        <NavLink to='/control-room/team-status' className='btn btn-outline-success btn-lg'>Team Status</NavLink>
        <NavLink to='/control-room/reports' className='btn btn-outline-success btn-lg'>Reports</NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
