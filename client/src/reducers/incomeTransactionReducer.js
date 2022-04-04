import {
  SET_INCOMES,
  GET_INCOMES
} from "../actions/types";

const initialIncomeState = [];

export default function foo(state = initialIncomeState, action) {
  switch (action.type) {
    case SET_INCOMES:
      return {
        ...state,
        incomes: action.payload
      };
    case GET_INCOMES: 
      return action.payload;
    default:
      return state;
  }
};