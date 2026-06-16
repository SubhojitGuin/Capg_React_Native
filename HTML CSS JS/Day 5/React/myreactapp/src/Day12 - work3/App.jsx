import React, { Suspense } from 'react'

const LazyComponent = React.lazy(() => import('./LazyComponent'))

export default function App() {
  return (
    <div>
      <h1>Welcome to React Lazy Loading</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <LazyComponent />
      </Suspense>
    </div>
  )
}
