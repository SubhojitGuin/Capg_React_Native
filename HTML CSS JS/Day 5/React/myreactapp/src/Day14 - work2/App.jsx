import React from 'react'
import { Provider } from 'react-redux'
import BookContainer from './ReduxToolkit/BookContainer'
import BookStore from './ReduxToolkit/BookStore'

export default function App() {
  return (
    <div>
      <Provider store={BookStore}>
        <div>
          <BookContainer/>
        </div>
      </Provider>
    </div>
  )
}
