import React from 'react'
import CustomThemeHook from './CustomThemeHook'

export default function App() {
  const { theme, toggleTheme } = CustomThemeHook();

  return (
    <div style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white', paddingLeft:'20px', height:'100vh'}}>
      <h1>The current theme is: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
