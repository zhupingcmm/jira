import React, { useMemo, useState } from "react";
import { useMount } from "utils";
import { useHttp } from "utils/http";
import { useUrlQueryParam } from "utils/url";

export const useProjectsSearchParams = () => {
  const [keys] = useState<("name" | "personId")[]>(["name", "personId"]);
  const [param, setParam] = useUrlQueryParam(keys);
  return [
    useMemo(() => {
      return { ...param, personId: Number(param.personId) || undefined };
    }, [param]),
    setParam,
  ] as const;
};

export const useProjectUser = () => {
  const [users, setUsers] = useState([]);
  const client = useHttp();
  useMount(() => {
    client("users").then(setUsers);
  });
  return users;
};
