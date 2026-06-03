import React from 'react'
import { useThemeContext } from './ThemeContext'

export default function MainSection() {

  const { theme, toggleTheme } = useThemeContext();

  return (
    <div style={{ padding: '20px', backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
      <h2>Current Theme is: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
