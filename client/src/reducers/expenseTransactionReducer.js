import {
  GET_EXPENSES,
  ADD_EXPENSE
} from '../actions/types';

const initialState = {
  expenses: []
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES:
      return action.payload;
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.epxenses, action.payload]
      };
    default:
      return state;
  }
};