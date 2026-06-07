import React from 'react'

export default function CourseCard({ name, instructor, duration }) {
  return (
    <div className='course-card'>
      <h2>Course Name: {name}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
    </div>
  )
}
