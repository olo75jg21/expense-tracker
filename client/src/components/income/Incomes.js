import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getIncomes } from "../../actions";

import AddIncomeForm from './AddIncomeForm';
import AddIncomeModal from './AddIncomeModal';
import ShowIncomes from './ShowIncomes';

const Incomes = () => {
  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

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