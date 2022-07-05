import React, { ReactNode } from "react";

import { AuthProvider } from "@src/context/auth-context";

export const AppContextProviders = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
