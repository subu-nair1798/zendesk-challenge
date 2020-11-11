import React, { Component } from 'react';
import Layout from '../components/Layout';
import TicketDetails from '../components/TicketDetails';
import { Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class TicketPage extends Component {

    state = {
        ticket: [],
        loading: false,
        errorFlag: false,
        errorMessage: ''
    }

    componentDidMount() {
        this.fetchTicketDetails();
    }

    fetchTicketDetails() {
        this.setState({ loading: true });

        fetch(`http://localhost:5000/tickets/${this.props.match.params.ticketID}`)
        .then(res => res.json())
        .then(ticket => {
            if(ticket.errorMessage) {
                this.setState({ errorFlag: true });
                this.setState({ loading: false });
                this.setState({ errorMessage: ticket.errorMessage });
            } else {
                this.setState({ ticket });
                this.setState({ loading: false });
            }
        });
    }

    render() {
        return(
            <Layout>
                {this.state.errorFlag ? <Message error header="Oops!" content={this.state.errorMessage} /> : (
                    <div>
                        <h2>Ticket Details</h2>
                        <hr />
                        {this.state.loading ? <h3>Loading...</h3> : (
                            <div>
                                <TicketDetails ticket={this.state.ticket} /> 
                                <hr />
                                <Link to="/">
                                    <div style={{ color: "#FFFFFF", background: "#000000" }} className="btn">
                                        <b>Back</b>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div> 
                    )}
            </Layout>
        );
    }
}

export default TicketPage;
 
