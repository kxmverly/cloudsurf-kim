// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Global styles

// The root component that gets rendered
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
