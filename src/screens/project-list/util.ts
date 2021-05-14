import React, { useMemo, useState } from "react";
import { useMount } from "utils";
import { useHttp } from "utils/http";
import { useUrlQueryParam } from "utils/url";
import { useAsync } from "utils/use-async";
import { Project } from "./list";

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


export const useEditProject = () => {

  const {run, ...asyncRequest} = useAsync();

  const client = useHttp();

  const mutate = (params: Partial<Project>) => {
    return run(client(`projects/${params.id}`,{
      data:params,
      method: 'PATCH'
    }))

  }

  return {
    mutate,
    ...asyncRequest
  }

}


export const useAddProject = () => {

  const {run, ...asyncRequest} = useAsync();

  const client = useHttp();

  const mutate = (params: Partial<Project>) => {
    return run(client(`projects/${params.id}`,{
      data:params,
      method: 'POST'
    }))

  }

  return {
    mutate,
    ...asyncRequest
  }

}