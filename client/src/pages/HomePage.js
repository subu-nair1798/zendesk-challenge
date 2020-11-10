import React, { Component } from 'react';
import Layout from '../components/Layout';
import TicketList from '../components/TicketList';
import Pagination from '../components/Pagination';
import { Message } from 'semantic-ui-react';

class HomePage extends Component {
    
    constructor() {
        super();
        this.state = {
            tickets: [],
            loading: false,
            currentPage: 1,
            ticketsPerPage: 25,
            errorFlag: false,
            errorMessage: ''
        };
    }

    componentDidMount() {
        this.fetchTickets();
    }

    fetchTickets() {
        this.setState({ loading: true });

        fetch('http://localhost:5000/')
        .then(res => res.json())
        .then(tickets => {
            if(tickets.errorMessage) {
                // console.log(tickets.errorMessage);
                this.setState({ errorFlag: true });
                this.setState({ loading: false });
                this.setState({ errorMessage: tickets.errorMessage });
            } else {
                this.setState({ tickets });
                // console.log('Fetched ' + this.state.tickets);
                this.setState({ loading: false });
                
            }
        });
    }

    render() {
        const indexOfLastTicket = this.state.currentPage * this.state.ticketsPerPage;
        const indexOfFirstTicket = indexOfLastTicket - this.state.ticketsPerPage;
        const currentTickets = this.state.tickets.slice(indexOfFirstTicket, indexOfLastTicket);

        const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

        return(
            <Layout>
                {this.state.errorFlag ? <Message error header="Oops!" content={this.state.errorMessage} /> : (
                    <div>
                        {this.state.tickets.length > 0 ? (
                            <div>
                                <h2>Active Tickets</h2>
                                <hr />
                                <TicketList tickets={currentTickets} loading={this.state.loading} />
                                <Pagination ticketsPerPage={this.state.ticketsPerPage} totalTickets={this.state.tickets.length} paginate={paginate} />`
                            </div>
                        ) : (
                            <div>
                                {this.state.loading ? <h3>Loading...</h3> : <h2>No Active Tickets!</h2>}
                            </div>
                        )}
                    </div>
                )}
            </Layout>
        );
    }
}

export default HomePage;