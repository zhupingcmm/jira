import { useConfig } from "./../../util/index";
import { User } from "../../types";
import { Project } from "@src/types";
import { useDebounce } from "@src/util";
import { useHttp } from "@src/util/http";
import { useAsync } from "@src/util/use-async";
import { useEffect, useMemo } from "react";
import { useUrlParam } from "@src/util/url";
import { useCallback } from "react";
import {
  useQuery,
  useMutation,
  QueryKey,
  QueryClient,
  useQueryClient,
} from "@tanstack/react-query";

export const useProjects = (
  param: Partial<Pick<Project, "name" | "personId" | "id">>
) => {
  const client = useHttp();
  const debounceValue = useDebounce(param, 500);
  const data = useMemo(() => {
    const tempVal = { ...debounceValue };
    if (Number(tempVal?.personId) === 0) {
      delete tempVal.personId;
    }
    return tempVal;
  }, [debounceValue]);
  return useQuery<Project[], Error>(["projects", data], () =>
    client("projects", { data })
  );
};

export const useProject = (projectId: number) => {
  const client = useHttp();
  return useQuery<Project>(
    ["project", projectId],
    () => client(`project/${projectId}`),
    {
      enabled: Boolean(projectId),
    }
  );
};

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  const queryClient = useQueryClient();
  return useMutation(
    (params?: Partial<Project>) =>
      client(`project/${params?.id}`, { data: params, method: "PATCH" }),
    useConfig(queryKey)
  );
};

export const useAddProject = (queryKey: QueryKey) => {
  const client = useHttp();
  const queryClient = useQueryClient();
  return useMutation(
    (params?: Partial<Project>) =>
      client("project", { data: params, method: "POST" }),
    useConfig(queryKey)
  );
};

export const useDeleteProject = (queryKey: QueryKey) => {
  const client = useHttp();
  // const queryClient = useQueryClient();
  return useMutation(
    (projectId: number) => client(`project/${projectId}`, { method: "DELETE" }),
    useConfig(queryKey)
  );
};

export const useUsers = () => {
  const client = useHttp();
  const { data: users } = useQuery(["users"], () => client("users"));
  return users;
};

export const useProjectModal = () => {
  const [{ projectId }, setProjectId] = useUrlParam(["projectId"]);

  const startEdit = useCallback((id: Number) => {
    setProjectId({ projectId: id });
  }, []);
  const cleanProjectId = useCallback(() => {
    setProjectId({ projectId: undefined });
  }, []);

  const { data: projectData } = useProject(Number(projectId));
  return {
    projectId,
    startEdit,
    cleanProjectId,
    projectData,
  };
};

export const useProjectSearchParams = () => {
  const [param, setParam] = useUrlParam(["name", "personId"]);
  return [
    useMemo(() => {
      return { ...param, personId: Number(param.personId) || undefined };
    }, [param]),
    setParam,
  ] as const;
};
export const useProjectQueryKey = () => {
  const [param] = useProjectSearchParams();
  return ["projects", param];
};
