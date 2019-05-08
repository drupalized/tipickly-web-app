// Global components.
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { FaFolderPlus, FaGlobe, FaRegClone } from 'react-icons/fa';

// Custom components.
import SitesList from '../../components/lists/SitesList';
import DomainsList from '../../components/lists/DomainsList';

// Styles.
import '../../styles/pages/home/Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Tabs defaultActiveKey="sites" className="justify-content-center mb-5">
          <Tab eventKey="sites" title="Sites">
            <Button className="p-3 text-uppercase" variant="warning">Create a new site <FaFolderPlus /></Button>
            <SitesList />
          </Tab>
          <Tab eventKey="domains" title="Domains">
            <Button className="p-3 mr-3 text-uppercase" variant="warning">Register a new domain <FaGlobe /></Button>
            <Button className="p-3 text-uppercase" variant="warning">Transfer an existing domain <FaRegClone /></Button>
            <DomainsList />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
