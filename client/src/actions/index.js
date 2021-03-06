import axios from 'axios';

import {
  FETCH_USER,
  GET_INCOMES,
  ADD_INCOME,
  DELETE_INCOME,
  UPDATE_INCOME,
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user/');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const getIncomes = () => async (dispatch) => {
  const res = await axios.get('/api/getAllIncome/');

  dispatch({ type: GET_INCOMES, payload: res.data });
};

export const addIncome = (income) => async (dispatch) => {
  const res = await axios.post('/api/createIncome/', income);

  dispatch({ type: ADD_INCOME, payload: res.data });
}

export const deleteIncome = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/deleteIncome/${id}`);

  dispatch({ type: DELETE_INCOME, payload: res.data });
}

export const updateIncome = (id, newIncome) => async (dispatch) => {
  const res = await axios.put(`/api/updateIncome/${id}`, newIncome);

  dispatch({ type: UPDATE_INCOME, payload: res.data });
}

export const getExpenses = () => async (dispatch) => {
  const res = await axios.get('/api/getAllExpense/');

  dispatch({ type: GET_EXPENSES, payload: res.data });
};

export const addExpense = (expense) => async (dispatch) => {
  const res = await axios.post('/api/createExpense/', expense);

  dispatch({ type: ADD_EXPENSE, payload: res.data });
};

export const deleteExpense = (id) => async (dispatch) => {
  const res = await axios.delete(`/api/deleteExpense/${id}`);

  dispatch({type: DELETE_EXPENSE, payload: res.data});
};

export const updateExpense = (id, newExpense) => async (dispatch) => {
  const res = await axios.put(`/api/updateExpense/${id}`, newExpense);

  dispatch({type: UPDATE_EXPENSE, payload: res.data});
};