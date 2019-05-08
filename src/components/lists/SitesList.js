// Global components.
import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

// Cusom components.
import LargeCard from '../../components/blocks/LargeCard';

class SitesList extends Component {
  render() {
    const sites = [1, 2, 3];

    return (
      <CardDeck className="Large-card mt-5">
        { sites.length !== 0 && sites.map((site, index) => {
          return (
            <LargeCard
              key={ index }
              cardImage="http://fpoimg.com/600x400"
              cardTitle="Site Title 1"
              cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
              cardTeaserText="http://site-url-dev-tipickly.domain.com"
            />
          )
        })}
        { sites.length === 0 &&
          <LargeCard
            cardTitle="Oh! No sites were found..."
            cardText="There are currently no sites under your account. It's time to create your first site!"
            cardTeaserText="Click here to create your first site."
          />
        }
      </CardDeck>
    );
  }
}

export default SitesList;
