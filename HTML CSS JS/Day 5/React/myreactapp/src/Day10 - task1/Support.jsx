import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Support() {

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || 'Unknown';

  const handleProfile = () => {
    navigate('/profile', { state: { from: 'Support Page' } });
  }

  return (
    <div className='container-fluid m-2'>
      <h1 className='mb-4 text-center'>Support Page</h1>
      <p>You came back from {from}</p>
      <div className='d-flex justify-content-center gap-3 m-5'>
        <button onClick={() => navigate(-1)} className='btn btn-secondary btn-lg'>Go Back</button>
        <button onClick={handleProfile} className='btn btn-primary btn-lg' >Go to Profile</button>
      </div>
    </div>
  )
}
