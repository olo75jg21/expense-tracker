import {
  GET_INCOMES,
  ADD_INCOME
} from "../actions/types";

const initialIncomeState = [];

export default function foo(state = initialIncomeState, action) {
  switch (action.type) {
    case GET_INCOMES: 
      return action.payload;
    case ADD_INCOME:
      return {
        ...state,
        initialIncomeState: [...state.initialIncomeState, action.payload]
      };
    default:
      return state;
  }
};