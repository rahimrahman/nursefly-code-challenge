import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import ReduxThunk from "redux-thunk";

import books from "./books";

const appReducer = combineReducers({
  books
});

export const setupStore = () => {
  const middlewares = [ReduxThunk];

  if (process.env.NODE_ENV === `development`) {
    // For redux-logger, which only requires normal browser debugging:
    const { logger } = require(`redux-logger`);
    middlewares.push(logger);

    return createStore(appReducer, compose(applyMiddleware(...middlewares)));
  }

  // on prod, don't include loggers
  return createStore(appReducer, {}, applyMiddleware(...middlewares));
};

export const store = setupStore();

