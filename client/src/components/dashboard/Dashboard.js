import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes } from '../../actions';
import { Link } from 'react-router-dom';

const Summary = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.amount}</p>
    </div>
  );
}

const Dashboard = () => {
  const auth = useSelector(state => state.auth);
  const income = useSelector(state => state.incomeTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
  }, []);

  // don't work
  if (!auth) {
    return (
      <div>
        <h1>Please, log in</h1>
      </div>
    )
  }

  if (income === []) {
    return (
      <div className='container'>
        <h1 className='text-center'>You need to configure your wallet</h1>
        <button href="/incomes">Create Income</button>
      </div>
    );
  }

  return (
    <div>
      <Summary
        title="Total income"
        amount={calculate(income)}
      />
    </div>
  );
};

const calculate = (arr) => {
  let sum = 0;
  arr.forEach(item => sum += item.amount);

  return sum;
} 


export default Dashboard;