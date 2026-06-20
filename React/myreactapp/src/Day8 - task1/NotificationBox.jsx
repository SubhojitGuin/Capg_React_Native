import React from 'react'

export default function NotificationBox({ message }) {
  return (
    <div className='notification-box'>
      <h2>Notification</h2>
      <p>{message}</p>
    </div>
  )
}
