import React from 'react';
import { Card } from 'semantic-ui-react';

const TicketDetail = ({ ticket }) => {
    const {
        id,
        created_at,
        subject,
        priority,
        status,
        description
    } = ticket;

    const items = [
        {
            header: 'ID',
            description: id,
            style: { width: "60px" }
        },
        {
            header: 'Subject',
            description: subject,
            style: { width: "339px" }
        },
        {
            header: 'Created at',
            description: 'Date: ' + (created_at + '').substring(0, 10) + ' | Time: ' + (created_at + '').substring(11, 16),
            style: { width: "300px" }
        },
        {
            header: 'Priority',
            description: (priority == null) ? 'Not Specified' : priority,
            style: { width: "175px" }
        },
        {
            header: 'Status',
            description: status,
            style: { width: "165px" }
        },
        {
            header: 'Description',
            description: description,
            style: { width: "1094px" }
        }
    ];

    return( <Card.Group items={items} /> );
}

export default TicketDetail;