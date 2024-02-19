import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
// import { render, screen } from '@testing-library/react';


function renderApp() {
  ReactDOM.render(<App />, document.getElementById("root"));
}

renderApp();
