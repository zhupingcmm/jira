import { useEffect } from "react";
import { Project } from "screens/project-list/list";
import { useHttp } from "utils/http";
import { useAsync } from "./use-async";
import { cleanObject } from "utils/index";
export const useProject = (param?: Partial<Project>) => {
  const client = useHttp();

  const { run, ...result } = useAsync<Project[]>();

  const fetchProject = () => client("projects", { data: cleanObject(param || {}) });

  useEffect(() => {
    run(fetchProject(), {retry: fetchProject});
  }, [param]);

  return result;
};
