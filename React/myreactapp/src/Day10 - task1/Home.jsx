import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/profile', { state: { from: 'Home Page' } });
  }

  const handleSupport = () => {
    navigate('/support', { state: { from: 'Home Page' } });
  }

  return (
    <div className='container-fluid m-2'>
      <h1 className='mb-4 text-center'>Student Help Desk</h1>
      <div className='d-flex justify-content-center gap-3'>
        <button onClick={handleProfile} className='btn btn-primary btn-lg' >Go to Profile</button>
        <button onClick={handleSupport} className='btn btn-success btn-lg' >Go to Support</button>
      </div>
    </div>
  )
}
