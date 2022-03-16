import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";



ReactDOM.render(
  <div>
    <Navbar />
    <App />
  </div>,
  document.getElementById("root")
);
