import React from 'react'
import { useOutletContext } from 'react-router-dom';

export default function LocationHistory() {

  const { rescue } = useOutletContext();
  const { location, history } = rescue;

  return (
    <div className='container-fluid shadow p-3 rounded'>
      <h4>Location & History</h4>
      <div className='d-flex flex-column justify-content-start align-items-start'>
        <p><strong>Location:</strong> {location.area}, {location.state}</p>
        <h5><strong>Previous Locations:</strong></h5>
        <table className='table table-striped table-bordered table-hover'>
          <thead>
            <tr>
              <td>Date</td>
              <td>Event</td>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.event}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
