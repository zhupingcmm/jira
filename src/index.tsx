import React from "react";
import { render } from "react-dom";
import "./style/index.scss";
import { AppContextProviders } from "@src/context";
import { App } from "./app";
import { ReactNotifications } from "react-notifications-component";

render(
  <div>
    <AppContextProviders>
      <ReactNotifications />
      <App />
    </AppContextProviders>
  </div>,
  document.getElementById("root")
);
