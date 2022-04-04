import axios from 'axios';

import {
  FETCH_USER,
  GET_INCOMES,
  GET_EXPENSES
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getIncomes = () => async (dispatch) => {
  const res = await axios.get('/api/getAllIncome');

  dispatch({ type: GET_INCOMES, payload: res.data });
};

export const getExpenses = () => async (dispatch) => {
  const res = await axios.get('/api/getAllExpense');

  dispatch({ type: GET_EXPENSES, payload: res.data });
};