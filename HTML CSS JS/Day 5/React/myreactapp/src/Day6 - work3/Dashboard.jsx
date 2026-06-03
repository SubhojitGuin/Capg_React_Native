import React from 'react'
import MainSection from './MainSection'

export default function Dashboard({ theme, toggleTheme }) {
  return (
    <div style={{backgroundColor:'pink', border: '1px solid black', padding: '50px'}}>
      <MainSection theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}
