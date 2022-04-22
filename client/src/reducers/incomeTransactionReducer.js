import {
  GET_INCOMES,
  ADD_INCOME,
  DELETE_INCOME
} from "../actions/types";

const initialState = {
  incomes: []
};

export default function foo(state = initialState, action) {
  switch (action.type) {
    case GET_INCOMES:
      return action.payload;
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload]
      };
    case DELETE_INCOME:
      return action.payload;
    default:
      return state;
  }
};