import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='container-fluid m-2'>
      <Navbar />
      <div>
        <h1>This is the Home Page</h1>
      </div>
    </div>
  )
}
