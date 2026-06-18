import React from 'react'
import { Provider } from 'react-redux'
import TicketStore from './Store'
import Home from './Components/Home'

export default function App() {
  return (
    <Provider store={TicketStore} >
      <Home />
    </Provider>
  )
}
