import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import choices from "./choices";

const reducer = combineReducers({
  choices: choices,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
