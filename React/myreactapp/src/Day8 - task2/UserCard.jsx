import React from 'react'

export default function UserCard({ name, email, phone, website }) {
  return (
    // <div className='card d-flex flex-column align-items-center border rounded-4' style={{backgroundColor: 'lightgreen', width: '490px'}}>
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
    </tr>
  )
}
