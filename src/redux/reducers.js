import { combineReducers } from "redux";
import todoReducer from "./todo"
import userReducer from "./user"

const allReducer = combineReducers({
  todo: todoReducer,
  user: userReducer
});

export default allReducer;
