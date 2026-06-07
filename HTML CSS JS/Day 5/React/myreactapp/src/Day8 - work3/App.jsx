import { useEffect } from 'react';
import axios from 'axios';
 
export default function App() {
    function fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    }
 
    useEffect(() => {
        fetchData();
    }, [])
 
  return (
    <div>
      <button className="btn btn-primary">Click Here </button>
 
    </div>
  )
}