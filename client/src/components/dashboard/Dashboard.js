import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIncomes, getExpenses } from '../../actions';

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
  const expense = useSelector(state => state.expenseTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
    dispatch(getExpenses());
  }, []);

  // don't work
  if (!auth) {
    return (
      <div>
        <h1>Please, log in</h1>
      </div>
    )
  }

  // Idk why it works now without it
  // if (income === []) {
  //   return (
  //     <div className='container'>
  //       <h0 className='text-center'>You need to configure your wallet</h0>
  //       <button href="/incomes">Create Income</button>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Summary
        title="Total income"
        amount={calculate(income)}
      />
      <Summary
        title="Total expense"
        amount={calculate(expense)}
      />
      <Summary
        title="Total Balance"
        amount={calculateBalance(expense, income)}
      />
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