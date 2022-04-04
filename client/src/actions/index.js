import axios from 'axios';

import {
  FETCH_USER,
  SET_INCOMES,
  GET_INCOMES
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const setIncomes = (operation) => {
  return {
    type: SET_INCOMES,
    payload: operation
  }
};

export const getIncomes = () => async (dispatch) => {
  const res = await axios.get('/api/getAllIncome');

  dispatch({ type: GET_INCOMES, payload: res.data });
};