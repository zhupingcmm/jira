import React from "react";
import logo from "./logo.svg";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <LoginScreen />
    </div>
  );
}

export default App;
