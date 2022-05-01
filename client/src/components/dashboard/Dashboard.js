import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses } from '../../actions';

import {
  Row,
  Col,
} from 'react-bootstrap';

import Summary from './Summary';
import SummaryChart from './SummaryChart';
import BalanceChart from './BalanceChart';

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
      <div className='container-fluid'>
        <Row xs={1} sm={1} md={1} lg={3} className='justify-content-md-center mb-4'>
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
        <Row xs={1} sm={1} md={1} lg={3}>
          <Col>
            <SummaryChart chartData={income} />
          </Col>
          <Col>
            <SummaryChart chartData={expense} />
          </Col>
          <Col>
            <BalanceChart income={calculate(income)} expense={calculate(expense)} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const calculate = (arr) => {
  let sum = 0;
  Array.from(arr).forEach(item => sum += item.amount);

  return sum;
}

const calculateBalance = (expensesArr, incomesArr) => {
  return calculate(incomesArr) - calculate(expensesArr);
}

export default Dashboard;