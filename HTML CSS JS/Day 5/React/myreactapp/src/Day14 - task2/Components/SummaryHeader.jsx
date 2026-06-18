import React from 'react'
import SummaryCard from './SummaryCard'
import { useSelector } from 'react-redux';

export default function SummaryHeader() {

  const tickets = useSelector(state => state.tickets.allTickets);

  const totalTickets = React.useMemo(() => tickets.length, [tickets]);
  const openTickets = React.useMemo(() => tickets.filter(ticket => ticket.status === 'Open').length, [tickets]);
  const inProgressTickets = React.useMemo(() => tickets.filter(ticket => ticket.status === 'In Progress').length, [tickets]);
  const resolvedTickets = React.useMemo(() => tickets.filter(ticket => ticket.status === 'Resolved').length, [tickets]);
  const starredTickets = React.useMemo(() => tickets.filter(ticket => ticket.starred).length, [tickets]);

  return (
    <div className='d-flex gap-2 justify-content-between mb-2'>
      <SummaryCard title='Total Tickets' value={totalTickets} color='blue'/>
      <SummaryCard title='Open Tickets' value={openTickets} color='red'/>
      <SummaryCard title='In Progress Tickets' value={inProgressTickets} color='orange'/>
      <SummaryCard title='Resolved Tickets' value={resolvedTickets} color='green'/>
      <SummaryCard title='Starred Tickets' value={starredTickets} color='yellow'/>
    </div>
  )
}
