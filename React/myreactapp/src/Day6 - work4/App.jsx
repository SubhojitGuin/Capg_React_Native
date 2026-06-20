import { useState } from 'react'
import Child from './Child'
import { DataContext } from './DataContext';

export default function App() {
  const [name, setName] = useState("John");
  return (
    <DataContext.Provider value={{ name, setName }}>
      <Child />
    </DataContext.Provider>
  )
}
