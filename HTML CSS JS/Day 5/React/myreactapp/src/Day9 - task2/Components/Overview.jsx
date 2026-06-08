import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function Overview() {

  const { rescue } = useOutletContext();

  return (
    <div className='container-fluid shadow p-3 rounded'>
      <h4>Overview</h4>
      <div className='d-flex flex-column justify-content-start align-items-start'>
        <p><strong>Animal:</strong> {rescue.animal}</p>
        <p><strong>Name:</strong> {rescue.name}</p>
        <p><strong>Status:</strong> {rescue.status}</p>
        <p><strong>Severity:</strong> {rescue.severity}</p>
        <p><strong>Rescued By:</strong> {rescue.rescuedBy}</p>
        <p><strong>Rescue Date:</strong> {rescue.rescueDate}</p>
      </div>
    </div>
  )
}
