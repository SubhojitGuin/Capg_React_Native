import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Profile() {

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || 'Unknown';

  const handleSupport = () => {
    navigate('/support', { state: { from: 'Profile Page' } });
  }

  return (
    <div className='container-fluid m-2'>
      <h1 className='mb-4 text-center'>Student Profile</h1>
      <p>You came back from {from}</p>
      <div className='d-flex justify-content-center gap-3 m-5'>
        <button onClick={() => navigate(-1)} className='btn btn-secondary btn-lg'>Go Back</button>
        <button onClick={handleSupport} className='btn btn-success btn-lg' >Go to Support</button>
      </div>
    </div>
  )
}
