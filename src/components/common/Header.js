// Global components.
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

// URL paths.
import { HOME, LOGIN } from '../../config/paths';

// Assets.
import logo from '../../assets/logo.svg';

// Styles.
import '../../styles/components/common/Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href={ HOME } className="App-header__logo">
            <Image src={ logo } alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Form inline className="w-100 ml-auto px-5 App-header__search">
              <FormControl type="text" placeholder="search for website..." className="w-75 rounded-0 border-0" size="lg" />
              <Button variant="outline-light" className="w-25 border-secondary rounded-0" size="lg">search</Button>
            </Form>
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
              <Nav.Link href={ HOME } className="align-self-center">Home</Nav.Link>
              <Nav.Link href={ LOGIN } className="align-self-center">Link</Nav.Link>
              <Nav.Link href={ LOGIN } className="align-self-center">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
