import { combineReducers } from "redux";

// reducers

import registerReducer from "./register";
import loginReducer from "./login";
import appReducer from "./app";
import todoReducer from "./todo";
import userReducer from "./user";
import postReducer from "./post";
import itemReducer from "./item";

const allReducer = combineReducers({
  register: registerReducer,
  login: loginReducer,
  app: appReducer,
  todo: todoReducer,
  user: userReducer,
  post: postReducer,
  item: itemReducer
});

export default allReducer;
