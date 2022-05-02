import {
  GET_INCOMES,
  ADD_INCOME,
  DELETE_INCOME,
  UPDATE_INCOME
} from "../actions/types";

const initialState = {
  incomes: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INCOMES:
      return action.payload;
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state, action.payload]
      };
    case DELETE_INCOME:
      return {
        ...state,
        incomes: [state.filter(item => item !== action.payload)] 
      }
    case UPDATE_INCOME:
      return {
        ...state,
        incomes: action.payload
      }
    default:
      return state;
  }
};