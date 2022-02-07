import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById("root")
);
