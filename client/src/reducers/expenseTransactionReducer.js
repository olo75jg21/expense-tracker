import { GET_EXPENSES } from '../actions/types';

const initialExpenseState = [];

export default function foo(state = initialExpenseState, action) {
  switch (action.type) {
    case GET_EXPENSES: 
      return action.payload;
    default:
      return state;
  }
};