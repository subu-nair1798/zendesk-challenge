import React from 'react';

const Pagination = ({ ticketsPerPage, totalTickets, paginate }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalTickets / ticketsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <div style={{ cursor: "pointer" }} onClick={() => paginate(number)} className="page-link">
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;