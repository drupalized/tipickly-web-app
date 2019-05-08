// Global components.
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// Pages.
import Login from '../pages/login/Login';

// Redux.
import { connect } from 'react-redux';

// URL paths.
import { LOGIN } from '../config/paths';

// Styles.
import '../styles/App.scss';

class App extends Component {
  componentDidMount() {
    //this.props.dispatch(getInstrumentCategoriesList());
  }

  render() {
    //const { history, location } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          Test
        </header>
        <div className="App-content">
          <Switch>
            <Route path={ LOGIN } exact component={ Login } />
          </Switch>
        </div>
        <footer className="App-footer">
          Test footer
        </footer>
      </div>
    );
  }
}

export default withRouter(connect()(App));
