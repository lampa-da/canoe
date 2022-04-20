import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import { Provider } from "react-redux";
import store from "./store/";
import { HashRouter as Router } from "react-router-dom";

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.querySelector("#root")
);
