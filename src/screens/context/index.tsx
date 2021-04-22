import { ReactNode } from "react";
import { AuthProvider } from "screens/context/auth-context";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
