import React from 'react';
import { useSelector } from "react-redux";

import AddIncomeModal from './AddIncomeModal';
import ShowIncomes from './ShowIncomes';

const Incomes = () => {
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
      <AddIncomeModal />
      <ShowIncomes />
    </div>
  );
};

export default Incomes;