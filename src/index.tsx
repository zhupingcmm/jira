import React from "react";
import { render } from "react-dom";
import { ProjectList } from "./components/screens/project-list";
import "./style/index.scss";

export const App = () => {
  return (
    <div>
      <ProjectList />
    </div>
  );
};

render(<App />, document.getElementById("root"));
