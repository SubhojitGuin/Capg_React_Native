import React, { useEffect, useState } from 'react'
import { getRescues } from '../apiService';
import RescueCard from './RescueCard';
import Navbar from './Navbar';

export default function RescueList() {

  const [rescues, setRescues] = useState([]);

  useEffect(() => {
    getRescues()
    .then(response => setRescues(response))
    .catch(error => console.log(error));
  }, []);

  return (
    <div className='container-fluid m-2'>
      <Navbar/>
      <div>
        <h1>Rescue List</h1>
      </div>
      <div className='d-flex flex-wrap gap-4'>
        {
          (rescues.length == 0) ?
          <h4>No rescues found</h4> : 
          rescues.map(({ id, animal, name, status, severity }) => 
            <RescueCard
              key={id}
              id={id}
              name={name}
              animal={animal}
              status={status}
              severity={severity}
            />
          )
        }
      </div>
    </div>
  )
}
