import React, { useEffect, useState } from 'react';
import { getRescueById } from '../apiService';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Navbar from './Navbar';

export default function RescueDetail() {

  const [ rescue, setRescue ] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    getRescueById(id)
    .then(response => setRescue(response))
    .catch(error => console.error('Error fetching rescue details:', error));
  }, []);

  return (
    <div className='container-fluid m-2'>
      <Navbar />
      <h1 className='text-center mb-4'>Rescue Detail</h1>
      <div className='container-fluid shadow p-3 rounded'>
        <div className='card-body d-flex flex-column p-4 justify-content-between gap-2 bg-light'>
          <div>
            <h5 className='card-title'>{rescue.animal}</h5>
            <p className='card-text text-muted'>{rescue.name}</p>
          </div>
          <div className='d-flex flex-column justify-content-between align-items-start'>
            <p className='fw-bold'>Rescue ID: {rescue.id}</p>
            <p className='fw-bold'>Status: {rescue.status}</p>
            <p className='fw-bold'>Severity: {rescue.severity}</p>
          </div>
          <div className='d-grid gap-2 m-3'>
            <NavLink to={`/rescues/${rescue.id}/overview`} className='btn btn-outline-primary'>Overview</NavLink>
            <NavLink to={`/rescues/${rescue.id}/medical`} className='btn btn-outline-primary'>Medical</NavLink>
            <NavLink to={`/rescues/${rescue.id}/location-history`} className='btn btn-outline-primary'>Location & History</NavLink>
          </div>
          <div>
            <Outlet context={{ rescue }} />
          </div>
        </div>
      </div>
    </div>
  )
}
