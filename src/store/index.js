import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import choices from "./choices";

const reducer = combineReducers({
  choices: choices,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   reducer,
//   composeEnhancers(applyMiddleware(thunk, logger))
// );

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger)
);

export default store;
