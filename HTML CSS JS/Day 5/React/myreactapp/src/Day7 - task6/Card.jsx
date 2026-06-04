import React from 'react'
import { useChangingTheme } from './useChangingTheme'

export default function Card() {
  const { width, height, theme, deviceType } = useChangingTheme();
  return (
    <div style={{backgroundColor: theme, height: '100vh', paddingLeft: '20px'}}>
      <h1>My App</h1>
      <p>The current theme is: {theme}</p>
      <p>Current width: {width}</p>
      <p>Current height: {height}</p>
      <p>Current device type: {deviceType} </p>
    </div>
  )
}
