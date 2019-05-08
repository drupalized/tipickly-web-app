// Global components.
import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';

// Cusom components.
import LargeCard from '../../components/blocks/LargeCard';

class DomainsList extends Component {
  render() {
    const domains = [];

    return (
      <CardDeck className="Large-card mt-5">
        { domains.length === 0 &&
          <LargeCard
            cardTitle="Oh! No domains were found..."
            cardText="There are currently no domains under your account. Let's start by registering one!"
            cardTeaserText="Click here to register your first domain."
          />
        }
      </CardDeck>
    );
  }
}

export default DomainsList;
