import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses } from '../../actions';

import {
  Button,
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

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

const Summary = ({ title, amount }) => {
  return (
    <div>
      <Card style={{ height: '7rem', marginTop: '0.5rem'}}>
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
}

const Dashboard = () => {
  const auth = useSelector(state => state.auth);
  const income = useSelector(state => state.incomeTransaction);
  const expense = useSelector(state => state.expenseTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
    dispatch(getExpenses());
  }, []);

  if (!auth) {
    return (
      <div>
        <p>Please, log in</p>
      </div>
    )
  }

  return (
    <div>
      <Container>
        <Row className='justify-content-md-center'>
          <Col>
            <Summary
              title="Income"
              amount={calculate(income)}
            />
          </Col>
          <Col>
            <Summary
              title="Expense"
              amount={calculate(expense)}
            />
          </Col>
          <Col>
            <Summary
              title="Balance"
              amount={calculateBalance(expense, income)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const calculate = (arr) => {
  let sum = 0;
  arr.forEach(item => sum += item.amount);

  return sum;
}

const calculateBalance = (expensesArr, incomesArr) => {
  return calculate(incomesArr) - calculate(expensesArr);
}

export default Dashboard;