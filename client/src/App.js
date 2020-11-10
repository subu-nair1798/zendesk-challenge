import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import TicketPage from './pages/TicketPage';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tickets/:ticketID" component={TicketPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
