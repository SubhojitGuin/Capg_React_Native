import React from 'react'
import AppointmentSection from './AppointmentSection'

export default function Dashboard({ appointment }) {
  return (
    <div className="dashboard">
      <AppointmentSection appointment={appointment} />
    </div>
  )
}
