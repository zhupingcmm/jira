import React from "react";
import { Button } from "antd";
import logo from "./logo.svg";
import { ProjectListScreen } from "screens/project-list";

import "./App.css";
import { useAuth } from "screens/context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";

function App() {
  const { user, logout } = useAuth();
  return (
    <div className="App">
      <Button type="dashed" onClick={() => logout()}>
        Logout
      </Button>
      {user ? <ProjectListScreen /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
