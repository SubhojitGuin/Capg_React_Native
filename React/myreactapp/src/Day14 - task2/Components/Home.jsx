import React from 'react'
import { useSelector } from 'react-redux'
import SummaryHeader from './SummaryHeader';
import FilterPanel from './FilterPanel';
import TicketList from './TicketList';
import SelectedTicket from './SelectedTicket';

export default function Home() {
  const tickets = useSelector(state => state.tickets.allTickets);
  const selectedTicketId = useSelector(state => state.tickets.selectedTicketId);

  const selectedTicket = React.useMemo(() => (selectedTicketId === null) 
    ? null 
    : tickets.find(ticket => ticket.id === selectedTicketId), [tickets, selectedTicketId]);

  return (
    <div className='container-fluid p-3 bg-primary-subtle d-flex flex-column' style={{ height: '100vh' }}>
      <h1>Customer Support Ticket Workspace</h1>
      <SummaryHeader />

      <div className='row flex-grow-1 overflow-hidden mt-2'>
        <div className='col-md-6 d-flex flex-column h-100 overflow-hidden'>
          <FilterPanel />
          <TicketList />
        </div>
        <div className='col-md-6 h-100'>
          {selectedTicketId !== null && selectedTicket && (
            <SelectedTicket ticket={selectedTicket}/>
          )}
        </div>
      </div>
    </div>
  )
}
