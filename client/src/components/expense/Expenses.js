import React from 'react';

import { useSelector } from "react-redux";

import AddExpenseModal from './AddExpenseModal';
import ShowExpenses from './ShowExpenses';

const Expenses = () => {
  const auth = useSelector(state => state.auth);

  if (!auth) {
    return (
      <div>
        <p>Please, log in</p>
      </div>
    );
  }

  return (
    <div>
      <AddExpenseModal />
      <ShowExpenses />
    </div>
  );

};

export default Expenses;