import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import reducer from "./reducer";

import App from "./App";

const myFirstMiddleware = (store) => {
  return (next) => {
    return (action) => {
      console.log("myFirstMiddleware is ran");
      return next(action);
    };
  };
};

// JavaScript Short hand syntext
const mySecondMiddleware = (store) => (next) => (action) => {
  console.log("mySecondMiddleware is ran");
  next(action);
};

// JavaScript Short hand syntext
const myThirdMiddleware = (store) => (next) => (action) => {
  console.log("myThirdMiddleware is ran");
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(
    myFirstMiddleware,
    mySecondMiddleware,
    myThirdMiddleware,
    logger
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
