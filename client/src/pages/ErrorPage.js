import React, { Component } from 'react';
import { Message, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <Container style={{ marginTop: "15px" }}>
                <Message error header="Oops!" content="Error 404: Bad URL!!! :("></Message>
                <Link to="/"><center><div className="btn btn-success" ><b>Go to Home</b></div></center></Link>
            </Container>
        );
    }
}

export default ErrorPage;