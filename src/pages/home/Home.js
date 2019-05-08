// Global components.
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardDeck from 'react-bootstrap/CardDeck';

// Custom components.
import LargeCard from '../../components/blocks/LargeCard';

// Styles.
import '../../styles/pages/home/Home.scss';

class Home extends Component {
  render() {
    const numbers = [1, 2, 3];

    return (
      <div className="Home">
        <Tabs defaultActiveKey="sites" className="justify-content-center">
          <Tab eventKey="sites" title="Sites">
            <Button className="mt-5 p-3 text-uppercase" variant="warning">Create a new site +</Button>
            <CardDeck className="Large-card mt-5">
              { numbers.map((number, index) => {
                return (
                  <LargeCard
                    key={ number }
                    cardImage="http://fpoimg.com/600x400"
                    cardTitle="Site Title 1"
                    cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
                    cardTeaserText="http://site-url-dev-tipickly.domain.com"
                  />
                )
              })}
            </CardDeck>
          </Tab>
          <Tab eventKey="domains" title="Domains">
            Test 1
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
