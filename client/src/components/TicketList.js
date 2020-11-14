import React from 'react';

const TicketList = ({ firstTicket, tickets, loading }) => {
    if(loading) {
        return <h3>Loading...</h3>
    }

    return( 
        <ul className="list-group mb-4">
            {tickets.map((ticket, index) => (
                <a href={`/tickets/${firstTicket + index + 1}`} key={ticket.id} className="list-group-item">
                    <b>{ticket.id}. </b>
                    <b>{ticket.subject}</b>
                    <div className="float-right">{(ticket.created_at + '').substring(0, 10) + ' | ' + (ticket.created_at + '').substring(11, 16)}</div>
                </a>
            ))}
        </ul>
    );
}

export default TicketList;