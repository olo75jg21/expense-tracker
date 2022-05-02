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

  console.log(income);

  const dispatch = useDispatch();

  useEffect(() => {
    if (income.incomes !== undefined) {
      dispatch(getIncomes());
    }

    if (expense.expense !== undefined) {
      dispatch(getExpenses());
    }
  }, [income, expense]);

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
              amount={calculate(income) - calculate(expense)}
            />
          </Col>
        </Row>
        <Row xs={1} sm={1} md={1} lg={3}>
          <Col>
            {/* <SummaryChart chartData={income} /> */}
          </Col>
          <Col>
            {/* <SummaryChart chartData={expense} /> */}
          </Col>
          <Col>
            <BalanceChart
              // income={calculate(income)}
              // expense={calculate(expense)}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

const calculate = (arr) => {
  const sum = Array.from(arr).reduce((accumulator, object) => {
    return accumulator + object.amount;
  }, 0);

  return sum;
}

export default Dashboard;