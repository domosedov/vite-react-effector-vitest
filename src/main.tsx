import React from "react";
import ReactDOM from "react-dom";
import { fork } from "effector";
import { Provider } from "effector-react/scope";
import "./index.css";
import { App } from "./app";

const scope = fork();

ReactDOM.render(
  <React.StrictMode>
    <Provider value={scope}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
