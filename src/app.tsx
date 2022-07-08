import React from "react";
import { FullPageLoading } from "./components/full-page";
// import { AuthenticatedApp } from "./authenticated-app";
import { useAuth } from "./context/auth-context";
// import { UnAuthenticatedApp } from "./unauthenticated-app";

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = React.lazy(() => import("./unauthenticated-app"));
export const App = () => {
  const { user } = useAuth();
  console.log("user", user);
  return (
    <div className="app">
      <React.Suspense fallback={<FullPageLoading />}>
        {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
      </React.Suspense>
    </div>
  );
};
