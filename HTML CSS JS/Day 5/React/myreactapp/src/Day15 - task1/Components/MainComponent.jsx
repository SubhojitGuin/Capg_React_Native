import React from 'react'
import SummaryHeader from './SummaryHeader'
import EventDetails from './EventDetails'
import FilterComponent from './FilterComponent'
import EmployeeList from './EmployeeList'
import { useDispatch } from 'react-redux'
import { reset } from '../Redux/EmployeeSlice'

export default function MainComponent() {

  const dispatch = useDispatch();

  return (
    <div>
      <div className='container-fluid pt-2'>
        <div className='d-flex flex-row justify-content-between'>
          <h1>Team Lunch RSVP Planner</h1>
          <button
            onClick={() => dispatch(reset())}
            className='btn btn-outline-success m-2'
          >Reset All</button>
        </div>
        <EventDetails/>
        <FilterComponent/>
        <SummaryHeader/>
        <EmployeeList/>
      </div>
    </div>
  )
}
