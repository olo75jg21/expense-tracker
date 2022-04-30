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
          <Nav.Link className='text-light'>Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/incomes">
          <Nav.Link className='text-light'>Incomes</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/expenses">
          <Nav.Link className='text-light'>Expenses</Nav.Link>
        </LinkContainer>
        <Nav.Link className='text-light' variant="secondary" href="/api/logout">Logout</Nav.Link>
      </Nav>
    );
  }

  return (
    <Nav className='ms-auto'>
      <Nav.Link className='text-light' variant="secondary" href="/auth/google">Login With Google</Nav.Link>
    </Nav>
  );
};

const Header = () => {
  const auth = useSelector(state => state.auth);

  return (
    <div>
      <Navbar bg="dark" expand="lg" className='text-light'>
        <Container>
          <LinkContainer to={auth ? '/dashboard' : '/'}>
            <Navbar.Brand className='text-light'>Expense Tracker</Navbar.Brand>
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