import React from "react";
import { AuthenticatedApp } from "./authenticated-app";
import { useAuth } from "./context/auth-context";
import { UnAuthenticatedApp } from "./unauthenticated-app";

export const App = () => {
  const { user } = useAuth();
  return (
    <div className="app">
      {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </div>
  );
};
