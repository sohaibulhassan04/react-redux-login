import { combineReducers } from "redux";
import amountReducer from "./amountReducer";
import accountReducer from "./accountReducer";
import athenticateReducer from "./athenticateReducer";

export const reducers = combineReducers({
  amount: amountReducer,
  account: accountReducer,
  athenticate: athenticateReducer,
});
export default reducers;
