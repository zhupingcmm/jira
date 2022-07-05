import { User } from "./types";
const apiUrl = process.env.REACT_APP_API_URL;

const localStorageKey = "__auth_provider_token__";

export const getToken = () => window.localStorage.getItem(localStorageKey);

export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);

export const handleResponse = ({ data }: { data: User }) => {
  window.localStorage.setItem(localStorageKey, JSON.stringify(data?.token));
  return data;
};

export const login = (data: Pick<User, "name" | "password">) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    const result = await res.json();
    if (res.ok) {
      console.log("result::", result);
      return handleResponse(result);
    } else {
      return Promise.reject(result);
    }
  });
};

export const register = (data: Pick<User, "name" | "password">) => {
  return fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    const result = await res.json();
    if (res.ok) {
      console.log("result::", result);
      return handleResponse(result);
    } else {
      return Promise.reject(result);
    }
  });
};
