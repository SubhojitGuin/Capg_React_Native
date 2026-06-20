import React from 'react'
import AppointmentCard from './AppointmentCard'

export default function AppointmentSection({ appointment }) {
  return (
    <div className="appointment-section">
      <h2>Patient Appointment Details</h2>
      <AppointmentCard
        patientName={appointment.patientName}
        doctorName={appointment.doctorName}
        department={appointment.department}
        time={appointment.time}
        roomNumber={appointment.roomNumber}
      />
    </div>
  )
}
