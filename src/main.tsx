import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import { fork } from "effector";
import { Provider } from "effector-react/scope";

const scope = fork();

ReactDOM.render(
  <React.StrictMode>
    <Provider value={scope}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
