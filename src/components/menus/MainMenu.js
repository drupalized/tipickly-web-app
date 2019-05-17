// Global components.
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { GoogleLogout } from 'react-google-login';

// URL paths.
import { HOME, LOGIN } from '../../config/paths';

// Styles.
import '../../styles/components/menus/MainMenu.scss';

class MainMenu extends Component {
  responseLogout = response => {
    console.log('Redirect the user');
  }

  render() {
    return (
      <Nav className="ml-auto">
        <NavDropdown
          title={
            <Image
              src="http://fpoimg.com/300x300"
              roundedCircle
            />
          }
          className="App-header__profile align-self-center"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href={ HOME } className="align-self-center">Dashboard</Nav.Link>
        <Nav.Link href={ LOGIN } className="align-self-center">Login</Nav.Link>
        <Nav.Link href={ LOGIN } className="align-self-center">Register</Nav.Link>
        <GoogleLogout
          buttonText="Logout"
          render={renderProps => (
            <Nav.Link onClick={ renderProps.onClick } className="align-self-center">Logout</Nav.Link>
          )}
          onLogoutSuccess={ this.responseLogout }
        >
        </GoogleLogout>
      </Nav>
    );
  }
}

export default MainMenu;
