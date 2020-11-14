const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    getTickets().then(response => { 
        if(response.name == 'Error') {
            res.json({ errorMessage: 'Unable to fetch Tickets!!! :(' });
        } else {
            res.json(response);
        }
    });
});

app.get('/tickets/:ticketID', (req, res) => {
    let currentTicket;
    getTickets().then(response => {
        if(response.name == 'Error') {
            res.json({ errorMessage: `Unable to fetch the details of Ticket ${req.params.ticketID}!!! :(` });
        } else if(response.length == 0 || req.params.ticketID > response[response.length - 1].id || req.params.ticketID < 1 || !(!isNaN(parseFloat(req.params.ticketID)) && !isNaN(req.params.ticketID - 0)) ){
            res.json({ errorMessage: 'Error 404: Bad URL!!! :(' });
        } else {
            currentTicket = response[req.params.ticketID - 1];
            res.json(currentTicket);
        }
    });
});

function getTickets () {
    return axios({
        url: 'https://subkaz.zendesk.com/api/v2/tickets.json',
        method: 'get',
        auth: {
            username: 'subunair17@gmail.com',
            password: 'nsr251719'
        }
    })
    .then(response => {
        return response.data.tickets;
    }).catch(error => {
        return error;
    });
}

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));