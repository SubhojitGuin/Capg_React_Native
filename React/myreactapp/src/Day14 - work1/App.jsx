import React from 'react'
import BookContainer from './BasicRedux/BookContainer'
import { Provider } from 'react-redux'
import store from './BasicRedux/Store'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <BookContainer/>
      </div>
    </Provider>
  )
}
