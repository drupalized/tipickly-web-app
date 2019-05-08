// Global components.
import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

// Styles.
import '../../styles/components/blocks/LargeCard.scss';

class LargeCard extends Component {
  render() {
    const { cardImage, cardTeaserText, cardText, cardTitle } = this.props;
    return (
      <Card>
        { typeof cardImage !== 'undefined' &&
          <Card.Img variant="top" src={ cardImage } />
        }
        <Card.Body>
          <Card.Title className="font-weight-bold">{ cardTitle }</Card.Title>
          <Card.Text>{ cardText }</Card.Text>
          <small>{ cardTeaserText }</small>
        </Card.Body>
      </Card>
    );
  }
}

export default LargeCard;
