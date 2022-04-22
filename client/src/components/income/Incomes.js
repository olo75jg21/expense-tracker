import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getIncomes } from "../../actions";

import AddIncomeForm from './AddIncomeForm';
import ShowIncomes from './ShowIncomes';

const Incomes = () => {
  const auth = useSelector(state => state.auth);
  const incomes = useSelector(state => state.incomeTransaction);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomes());
  }, []);

  if (!auth) {
    return (
      <div>
        <p>Please, log in</p>
      </div>
    );
  }

  return (
    <div>
      <AddIncomeForm />
      <ShowIncomes />
    </div>
  );
};

export default Incomes;