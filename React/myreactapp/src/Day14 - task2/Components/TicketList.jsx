import React from 'react'
import { useSelector } from 'react-redux';
import TicketItem from './TicketItem';

export default function TicketList() {
  const tickets = useSelector(state => state.tickets.allTickets);
  const activeFilter = useSelector(state => state.tickets.activeFilter);

  const filteredTickets = React.useMemo(() => 
    (activeFilter === 'All')
    ? tickets
    : tickets.filter(ticket => ticket.status === activeFilter),
  [tickets, activeFilter]);

  return (
    <div className='d-flex flex-column gap-2 overflow-auto flex-grow-1 align-items-center w-100 pe-1'>
      {filteredTickets.map(ticket => 
        <TicketItem key={ticket.id} ticket={ticket}/>
      )}
    </div>
  )
}
