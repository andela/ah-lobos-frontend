import React from "react";
import { render } from "react-dom";
import { toast } from "react-toastify";
import { Provider } from "react-redux";
import App from "./App";
import "./styles/mains.scss";
import "./styles/reset.scss";
import "./styles/rate-article.scss";
import "./styles/notification.scss";
import "react-toastify/dist/ReactToastify.css";
import configureStore from "./redux/configureStore";

const store = configureStore();

toast.configure({
  autoClose: false,
  draggable: false
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
