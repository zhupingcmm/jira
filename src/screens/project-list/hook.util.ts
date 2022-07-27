import { User } from "../../types";
import { Project } from "@src/types";
import { useDebounce } from "@src/util";
import { useHttp } from "@src/util/http";
import { useAsync } from "@src/util/use-async";
import { useEffect } from "react";
import { useUrlParam } from "@src/util/url";
import { useCallback } from "react";

export const useProject = (
  param: Partial<Pick<Project, "name" | "personId">>
) => {
  const client = useHttp();
  const { data: list, isLoading, run, retry } = useAsync<Project[]>();
  const debounceValue = useDebounce(param, 500);
  useEffect(() => {
    const tempVal = { ...debounceValue };
    if (Number(tempVal?.personId) === 0) {
      delete tempVal.personId;
    }
    const fetchProject = () => client("projects", { data: tempVal });
    run(fetchProject(), { retry: fetchProject });
  }, [debounceValue]);
  return { list, isLoading, retry };
};

export const useEditProject = () => {
  const client = useHttp();
  const { run, ...rest } = useAsync<Project>();

  const mutate = (params?: Partial<Project>) => {
    return run(
      client(`project/${params?.id}`, { data: params, method: "PATCH" })
    );
  };

  return { mutate, ...rest };
};

export const useUsers = () => {
  const client = useHttp();
  const { data: users, run } = useAsync<User[]>();

  useEffect(() => {
    run(client("users"));
  }, []);

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
