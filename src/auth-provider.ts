import { http } from "./util/http";
import { User } from "./types";

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);

export const handleResponse = ({ data }: { data: User }) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data?.token));
  return data;
};

export const login = (data: Pick<User, "name" | "password">) => {
  return http("login", { data, method: "POST" }).then((res) =>
    handleResponse(res)
  );
};

export const register = (data: Pick<User, "name" | "password">) => {
  return http("register", { data, method: "POST" }).then((res) =>
    handleResponse(res)
  );
};
