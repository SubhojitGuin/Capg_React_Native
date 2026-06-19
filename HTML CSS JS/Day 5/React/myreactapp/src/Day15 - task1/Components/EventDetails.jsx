import React from 'react'
import { useSelector } from 'react-redux'

export default function EventDetails() {

  const event = useSelector((state) => state.employees.event);
  const cardStyle = 'w-100 p-2 rounded ps-4';

  return (
    <div className='card mb-2 shadow-sm'>
      <div className='card-body'>
        <h1 className='card-title'>Event Details</h1>
        <div className='d-flex flex-row justify-content-between px-2 py-1'>
          <div style={{ borderRight: '1px solid #ccc' }} className={cardStyle}>
            <p>Event Name</p>
            <h5>{event.name}</h5>
          </div>
          <div style={{ borderRight: '1px solid #ccc' }} className={cardStyle}>
            <p>Venue</p>
            <h5>{event.venue}</h5>
          </div>
          <div style={{ borderRight: '1px solid #ccc' }} className={cardStyle}>
            <p>Time</p>
            <h5>{event.time}</h5>
          </div>
          <div style={{ borderRight: '1px solid #ccc' }} className={cardStyle}>
            <p>Day</p>
            <h5>{event.day}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
