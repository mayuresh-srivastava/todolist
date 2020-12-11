import { combineReducers } from "redux";
import todoReducer from "./todo";
import userReducer from "./user";
import loginReducer from "./login";
import appReducer from "./app";
import postReducer from "./post";
import registerReducer from "./register";

const allReducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  login: loginReducer,
  app: appReducer,
  post: postReducer,
  register: registerReducer
});

export default allReducer;
