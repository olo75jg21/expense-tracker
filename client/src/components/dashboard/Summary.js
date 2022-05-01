import React from "react";

import {
  Button,
  Card
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

const Summary = ({ title, amount }) => {
  return (
    <div>
      <Card style={{ height: '7rem', marginTop: '0.5rem' }}>
        <Card.Body>
          <Card.Title>
            {renderSummaryTitle(amount, title)}
          </Card.Title>
          <Card.Text>
            {amount || title === 'Balance' ? amount : renderCardLinkButton(title)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

const renderSummaryTitle = (amount, title) => {
  return (
    <div>
      {amount === 0 && title !== 'Balance' ? <p>Add your first {title}</p> : <p>{`Total ${title}`}</p>}
    </div>
  );
}

const renderCardLinkButton = (title) => {
  return (
    <LinkContainer to={`/${title.toLowerCase()}s`}>
      <Button variant="secondary">+</Button>
    </LinkContainer>
  );
};

export default Summary;