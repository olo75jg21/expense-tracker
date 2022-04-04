import { combineReducers } from "redux";

import authReducer from "./authReducer";
import incomeTransactionReducer from "./incomeTransactionReducer";
import expenseTransactionReducer from "./expenseTransactionReducer";

export default combineReducers({
  auth: authReducer,
  incomeTransaction: incomeTransactionReducer,
  expenseTransaction: expenseTransactionReducer 
});