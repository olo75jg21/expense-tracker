import React from 'react';
import { useSelector } from 'react-redux';

import AddIncomeForm from './AddIncomeForm';
import ShowIncomes from './ShowIncomes';

const Incomes = () => {
  const auth = useSelector(state => state.auth);

  if (!auth) {
    return (
      <div>
        <p>Please, log in</p>
      </div>
    )
  }

  return (
    <div>
      <AddIncomeForm />
      <ShowIncomes />
    </div>
  );
};

export default Incomes;