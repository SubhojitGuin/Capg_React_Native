import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function MedicalLog() {

  const { rescue } = useOutletContext();
  const medical = rescue.medical;

  return (
    <div className='container-fluid shadow p-3 rounded'>
      <h4>Medical Log</h4>
      <div className='d-flex flex-column justify-content-start align-items-start'>
        <p><strong>Condition:</strong> {medical.condition}</p>
        <p><strong>Treatment:</strong> {medical.treatment}</p>
        <p><strong>Vet:</strong> {medical.vet}</p>
        <p><strong>Last Updated:</strong> {medical.lastUpdated}</p>
      </div>
    </div>
  )
}
