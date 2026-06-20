import React from 'react'

export default function AppointmentCard({ patientName, doctorName, department, time, roomNumber }) {
  return (
    <div className="appointment-card">
      <div><strong>Patient Name:</strong> <span>{patientName}</span></div>
      <hr/>
      <div><strong>Doctor Name:</strong> <span>{doctorName}</span></div>
      <hr/>
      <div><strong>Department:</strong> <span>{department}</span></div>
      <hr/>
      <div><strong>Appointment Time:</strong> <span>{time}</span></div>
      <hr/>
      <div><strong>Room Number:</strong> <span>{roomNumber}</span></div>
    </div>
  )
}
