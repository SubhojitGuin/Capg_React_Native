import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RescueCard({ id, animal, name, status, severity }) {

  const navigate = useNavigate();

  function handleSeeMore() {
    navigate(`/rescues/${id}`);
  }

  return (
    <div className='card shadow p-3 rounded' style={{ width: '24rem' }}>
      <div className='card-body d-flex flex-column justify-content-between gap-2 bg-light'>
        <div>
          <h5 className='card-title'>{animal}</h5>
          <p className='card-text text-muted'>{name}</p>
        </div>
        <div>
          <div className='d-flex flex-column justify-content-between align-items-start'>
            <p className='fw-bold'>Status: {status}</p>
            <p className='fw-bold'>Severity: {severity}</p>
          </div>
          <div className='d-flex flex-row justify-content-between'>
            <button className='btn btn-info' onClick={handleSeeMore}>See More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
