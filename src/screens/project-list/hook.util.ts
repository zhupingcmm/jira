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

export const useProject = (
  param: Partial<Pick<Project, "name" | "personId">>
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

export const useEditProject = (queryKey: QueryKey) => {
  const client = useHttp();
  const queryClient = useQueryClient();
  return useMutation(
    (params?: Partial<Project>) =>
      client(`project/${params?.id}`, { data: params, method: "PATCH" }),
    {
      onSuccess(data, variables, context) {
        queryClient.invalidateQueries(queryKey);
      },
      onError(err: any, variables: any, context?: any) {
        queryClient.setQueryData(queryKey, context.previousItems);
      },
    }
  );
};

export const useUsers = () => {
  const client = useHttp();
  const { data: users } = useQuery(["users"], () => client("users"));
  return users;
};

export const useProjectQueryKey = () => {
  const [{ projectId }, setProjectId] = useUrlParam(["projectId"]);

  const startEdit = useCallback((id: Number) => {
    setProjectId({ projectId: id });
  }, []);
  const cleanProjectId = useCallback(() => {
    setProjectId({ projectId: undefined });
  }, []);

  return {
    projectId,
    startEdit,
    cleanProjectId,
  };
};
