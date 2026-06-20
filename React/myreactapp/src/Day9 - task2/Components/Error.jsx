import React from 'react'
import Navbar from './Navbar'

export default function Error() {
  return (
    <div>
      <div className='container-fluid m-2'>
        <Navbar />
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  )
}
