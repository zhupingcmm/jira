import React from "react";
import { render } from "react-dom";
import { ProjectList } from "./components/screens/project-list";
import "./style/index.scss";
import { UnAuthenticatedApp } from "@src/unauthenticated-app/index";
import { AppContextProviders } from "@src/context";

export const App = () => {
  return (
    <div>
      {/* <ProjectList /> */}
      <AppContextProviders>
        <UnAuthenticatedApp />
      </AppContextProviders>
    </div>
  );
};

render(<App />, document.getElementById("root"));
