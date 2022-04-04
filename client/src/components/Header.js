import React from 'react';
import { useSelector } from 'react-redux';

import {
  Navbar,
  Container,
  Nav,
  Button
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const renderHeaderContent = (authStatus) => {
  if (authStatus) {
    return (
      <Nav className='ms-auto'>
        <LinkContainer to="/dashboard">
          <Nav.Link>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/incomes">
          <Nav.Link>Incomes</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/expenses">
          <Nav.Link>Expenses</Nav.Link>
        </LinkContainer>
        <Button variant="secondary" href="/api/logout">Logout</Button>
      </Nav>
    );
  }

  return (
    <Nav className='ms-auto'>
      <Button variant="secondary" href="/auth/google">Login With Google</Button>
    </Nav>
  );
};

const Header = () => {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <Navbar bg="light" expand="lg" >
        <Container>
          <LinkContainer to={'/'}>
            <Navbar.Brand>Expense Tracker</Navbar.Brand>
          </LinkContainer>
          <Navbar.Collapse id="basic-navbar-nav">
            {renderHeaderContent(auth)}
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;