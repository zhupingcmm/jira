import React from "react";
// import { AuthenticatedApp } from "./authenticated-app";
import { useAuth } from "./context/auth-context";
// import { UnAuthenticatedApp } from "./unauthenticated-app";

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = React.lazy(() => import("./unauthenticated-app"));
export const App = () => {
  const { user } = useAuth();
  return (
    <div className="app">
      <React.Suspense fallback={<p>loading</p>}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </React.Suspense>
    </div>
  );
};
