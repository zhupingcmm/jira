import { User } from "@src/types";
import React, { ReactNode, useContext, useState } from "react";
import * as auth from "@src/auth-provider";
import { http } from "@src/util/http";
import { useMount } from "@src/util";

const AuthContext = React.createContext<
  | {
      user: User | null;
      login: (form: Pick<User, "name" | "password">) => Promise<void>;
      register: (form: Pick<User, "name" | "password">) => Promise<void>;
      logout: () => Promise<void>;
    }
  | undefined
>(undefined);

AuthContext.displayName = "AuthContext";

export const bootstrapUser = async () => {
  let user = null;
  let token = auth.getToken() || undefined;
  if (!user && token) {
    token = token?.replace('"', "");
    user = await http("me", { token }).then((res) => {
      return res.data;
    });
  }

  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: Pick<User, "name" | "password">) =>
    auth.login(form).then(setUser);
  const register = (form: Pick<User, "name" | "password">) =>
    auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(async () => {
    setUser(await bootstrapUser());
  });
  return (
    <AuthContext.Provider
      value={{ user, login, logout, register }}
      children={children}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error("useContext 必须在 AuthProvider 之中");
  return context;
};
