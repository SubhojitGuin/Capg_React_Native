import React from 'react'

export default function GrandChild({ data: person }) {
  return (
    <div>
      <h3>I am the GrandChild Component</h3>
      {
        person && person.map((person, index) => {
          return <p key={index}>{person.name} is of {person.age} years old.</p>
        })
      }
    </div>
  )
}
