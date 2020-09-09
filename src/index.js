import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CounterProvider } from "./Context";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  rootElement
);
