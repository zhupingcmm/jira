import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { loadDevTools } from "jira-dev-tool";
import { loadServer, DevTools } from "jira-dev-tool";
import { AppProviders } from "screens/context";
import "antd/dist/antd.css";

loadServer(() => {
  ReactDOM.render(
    <React.StrictMode>
      <AppProviders>
        <DevTools />
        <App />
      </AppProviders>
    </React.StrictMode>,
    document.getElementById("root")
  );
});

reportWebVitals();
