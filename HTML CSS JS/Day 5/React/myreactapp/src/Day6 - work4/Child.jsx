import React from 'react'
import GrandChild from './GrandChild'

export default function Child() {
  return (
    <div>
      <h2>I am the Child component</h2>
      <GrandChild />
    </div>
  )
}
