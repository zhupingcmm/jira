import React from "react";
import logo from "./logo.svg";
import { ProjectListScreen } from "screens/project-list";
import { LoginScreen } from "screens/login";

import "./App.css";
import { useAuth } from "screens/context/auth-context";
import {UnauthenticatedApp} from "unauthenticated-app";

function App() {
  const {user} = useAuth();
  return (
    <div className="App">
      {
        user ? <ProjectListScreen /> : <UnauthenticatedApp/>
      }
      
      {/* <LoginScreen /> */}
    </div>
  );
}

export default App;
