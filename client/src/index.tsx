import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import store from "./store/index";
import { Provider } from "react-redux";



ReactDOM.render(
  <div>
    <Provider store={store}>
      <Navbar />
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
