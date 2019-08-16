import React from "react";
import "./styles/mains.scss";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./redux/configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
