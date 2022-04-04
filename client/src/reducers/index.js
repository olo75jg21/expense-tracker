import { combineReducers } from "redux";

import authReducer from "./authReducer";
import incomeTransactionReducer from "./incomeTransactionReducer";

export default combineReducers({
  auth: authReducer,
  incomeTransaction: incomeTransactionReducer
});