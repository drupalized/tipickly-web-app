// Global components.
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Custom components.
import Header from './common/Header';
import Footer from './common/Footer';

// Pages.
import Login from '../pages/login/Login';
import Home from '../pages/home/Home';

// URL paths.
import { HOME, LOGIN } from '../config/paths';

// Styles.
import '../styles/App.scss';

class App extends Component {
  render() {
    //const { history, location } = this.props;

    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Container>
            <Switch>
              <Route path={ HOME } exact component={ Home } />
              <Route path={ LOGIN } exact component={ Login } />
            </Switch>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
