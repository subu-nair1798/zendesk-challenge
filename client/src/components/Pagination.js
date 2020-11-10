import React from 'react';

export default ({ ticketsPerPage, totalTickets, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a style={{ cursor: 'pointer' }} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}