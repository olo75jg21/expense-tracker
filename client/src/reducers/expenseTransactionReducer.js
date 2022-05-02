import {
  GET_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE
} from '../actions/types';

const initialState = {
  expenses: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES:
      return action.payload;
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state, action.payload]
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: [state.filter(item => item !== action.payload)]
      };
    case UPDATE_EXPENSE:
      return {
        ...state,
        expenses: action.payload
      }
    default:
      return state;
  }
};