import React from 'react';

import {
  Navbar,
  Container,
  Nav
} from 'react-bootstrap';

import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" />
            Expense Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>Dashboard</Nav.Link>
              <Nav.Link>Incomes</Nav.Link>
              <Nav.Link>Expenses</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;