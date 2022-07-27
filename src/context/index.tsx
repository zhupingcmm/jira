import React, { ReactNode } from "react";

import { AuthProvider } from "@src/context/auth-context";
import { Provider } from "react-redux";
import { store } from "@src/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
export const AppContextProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    </Provider>
  );
};
