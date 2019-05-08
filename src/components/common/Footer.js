// Global components.
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

// Assets.
import logo from '../../assets/logo.svg';

// Styles.
import '../../styles/components/common/Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="App-footer mt-5 p-5 text-center">
        <Container>
          <div><Image src={ logo } alt="logo" className="App-footer__logo mb-3" /></div>
          <div>This is a product of Drupalized.</div>
        </Container>
      </footer>
    );
  }
}

export default Footer;
