import React from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import TodoList from './TodoList'

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>      
  )
}
