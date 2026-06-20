import React from 'react'
 
export default function UserList({person}) {
  return (
    <div>
      <h3>Name is : {person.name}</h3>
        <h3>Age is : {person.age}</h3>
    </div>
  )
}