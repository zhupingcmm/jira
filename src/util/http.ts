import { useCallback } from "react";
import { useAuth } from "@src/context/auth-context";
import * as qs from "qs";
import { cleanObject } from "@src/util/index";

const apiUrl = process.env.REACT_APP_API_URL;
interface Config extends RequestInit {
  data?: object;
  token?: string;
}
export const http = (
  endPoint: string,
  { data, token, ...customerConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customerConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endPoint += `?${qs.stringify(cleanObject(data))}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window.fetch(`${apiUrl}/${endPoint}`, config).then(async (res) => {
    const result = await res.json();
    if (res.ok) {
      return Promise.resolve(result);
    } else {
      return Promise.reject(result);
    }
  });
};

export const useHttp = () => {
  const { user } = useAuth();
  return useCallback(
    (...[endpoint, config]: Parameters<typeof http>) => {
      http(endpoint, { ...config, token: user?.token });
    },
    [user]
  );
};
