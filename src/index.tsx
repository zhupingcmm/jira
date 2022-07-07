import React from "react";
import { render } from "react-dom";
import "./style/index.scss";
import { AppContextProviders } from "@src/context";
import { App } from "./app";

render(
  <div>
    <AppContextProviders>
      <App />
    </AppContextProviders>
  </div>,
  document.getElementById("root")
);
