// Global components.
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

// Custom components.
import MainMenu from '../menus/MainMenu';

// URL paths.
import { HOME } from '../../config/paths';

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
              <FormControl type="text" placeholder="search for a site and press enter..." className="w-100 border-0" size="lg" />
            </Form>
            <MainMenu />
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default Header;
