import React from 'react'

export default function StudentProfile({ name, batch, skill }) {
  return (
    <div className='student-profile'>
      <h2>Name: {name}</h2>
      <p>Batch: {batch}</p>
      <p>Skill: {skill}</p>
    </div>
  )
}
