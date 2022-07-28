import React from "react";
import ErrorBoundary from "./components/error-boundary";
import { FullPageLoading } from "./components/full-page";
import { useAuth } from "./context/auth-context";
import { FullPageError } from "@src/components/full-page-error";

const AuthenticatedApp = React.lazy(() => import("./authenticated-app"));
const UnAuthenticatedApp = React.lazy(() => import("./unauthenticated-app"));
export const App = () => {
  const { user } = useAuth();
  return (
    <div className="app">
      <ErrorBoundary fallbackRender={FullPageError}>
        <React.Suspense fallback={<FullPageLoading />}>
          {user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
        </React.Suspense>
      </ErrorBoundary>
    </div>
  );
};
