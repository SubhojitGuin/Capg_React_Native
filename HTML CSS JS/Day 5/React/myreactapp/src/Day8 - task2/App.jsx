import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';

export default function App() {

  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  const filteredUsers = users.filter(({name}) => name.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div style={{textAlign: 'center', padding: '60px'}}>
      <div className='p-5 d-flex flex-row gap-2 align-items-center justify-content-center'>
        <label htmlFor="search" className='form-label'>Search by name</label>
        <input type="search" name="search" id="search" className='form-control' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      </div>
      <table class="table table-hover table-striped">
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Website</th>
        </thead>
        <tbody>
        {
          filteredUsers.map((user) => 
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email} 
            phone={user.phone}
            website={user.website}
          />
          )
        }
        </tbody>
      </table>
    </div>
  )
}
