import React from 'react'
import { Provider } from 'react-redux'
import MainComponent from './Components/MainComponent'
import EmployeeStore from './Redux/Store'

export default function App() {
  return (
    <Provider store={EmployeeStore}>
      <MainComponent/>
    </Provider>
  )
}
