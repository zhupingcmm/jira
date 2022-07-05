import React from "react";
import { render } from "react-dom";
import { ProjectList } from "./components/screens/project-list";
import "./style/index.scss";
import { UnAuthenticatedApp } from "@src/unauthenticated-app/index";

export const App = () => {
  return (
    <div>
      {/* <ProjectList /> */}
      <UnAuthenticatedApp />
    </div>
  );
};

render(<App />, document.getElementById("root"));
