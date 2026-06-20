import { useContext } from 'react'
import { DataContext } from './DataContext';

export default function GrandChild() {
  const { name, setName } = useContext(DataContext);

  return (
    <div>
      <h3>I am the GrandChild Component</h3>
      <p>{name}</p>
      <button onClick={() => setName("Jane")}>Change Name</button>
    </div>
  )
}
