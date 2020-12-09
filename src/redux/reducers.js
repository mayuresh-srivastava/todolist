import { combineReducers } from "redux";
import todoReducer from "./todo";
import userReducer from "./user";
import loginReducer from "./login";
import appReducer from "./app";

const allReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  login: loginReducer,
  app: appReducer
});

export default allReducer;
