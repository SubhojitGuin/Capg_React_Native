import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
 
export default function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }

  function fetchData() {
      axios.get('http://localhost:4000/user')
          .then(response => console.log(response.data))
          .catch(error => console.error(error));
  }

  useEffect(() => {
      fetchData();
  }, [])

  function AddNewUser() {
    const newUser = {
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '123-456-7890'
    };
    axios.post('http://localhost:4000/user', newUser)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
  }

  return (
    <div>
      <Navbar />
      <input type="text" placeholder="Enter name" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="btn btn-primary">Login</button>
      <h1>Welcome to the App</h1>
      <p>This is the main page of the app.</p>
      <button className="btn btn-primary">Click Here </button>
      <button className="btn btn-secondary" onClick={AddNewUser}>Add New User</button>
    </div>
  )
}