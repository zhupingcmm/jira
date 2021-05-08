import React from "react";
// import { Button } from "antd";
// import logo from "./logo.svg";
// import { ProjectListScreen } from "screens/project-list";

import "./App.css";
import { useAuth } from "screens/context/auth-context";
import { UnauthenticatedApp } from "unauthenticated-app";
import {AuthenticatedApp} from "authenticated-app";
import {ErrorBoundary} from "componnets/error-boundary";
import { FullPageError } from "componnets/lib";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
     
    </div>
  );
}

export default App;
