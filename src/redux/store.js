import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
// import ReduxPromise from "redux-promise";

import allReducer from "./reducers";

const middleware = applyMiddleware(logger);

const store = createStore(allReducer, composeWithDevTools(middleware)); // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default store;
